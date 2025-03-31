require('dotenv').config();
const DiscordNotification = require('@penseapp/discord-notification');

const discordNotification = new DiscordNotification.DiscordNotification(
	'MobileUI',
	process.env.DISCORD_WEBHOOK
);

function getCurrentTimestamp() {
	const options = {
		timeZone: 'Asia/Jakarta',
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	};
	const formatter = new Intl.DateTimeFormat('en-ID', options);
	return formatter.format(new Date());
}

function getCommonFields() {
	return [
		{ name: 'Repositório', value: process.env.REPOSITORY_URL || 'N/A', inline: false },
		{ name: 'Branch', value: process.env.BRANCH || 'N/A', inline: true },
		{ name: 'Build', value: `android.v1.${process.env.BUILD || '0'}`, inline: true },
		{ name: 'Pipeline', value: process.env.BUILD_URL || 'N/A', inline: false },
	];
}

function sendStartMessage() {
	const timestamp = getCurrentTimestamp();

	discordNotification
		.infoMessage()
		.addTitle('Testes Iniciados')
		.addDescription('Os testes automatizados começaram.')
		.addFields(getCommonFields())
		.addFooter(`Iniciado em ${timestamp}`)
		.sendMessage();
}

function sendSuccessMessage(passedCount) {
	const timestamp = getCurrentTimestamp();

	discordNotification
		.successMessage()
		.addTitle('Testes Finalizados com Sucesso')
		.addDescription(`Todos os testes passaram!`)
		.addFields(getCommonFields())
		.addField({ name: 'Resultado', value: `${passedCount} testes aprovados`, inline: false })
		.addFooter(`Finalizado em ${timestamp}`)
		.sendMessage();
}

function sendFailureMessage(failedCount, summary) {
	const timestamp = getCurrentTimestamp();

	discordNotification
		.warningMessage()
		.addTitle('Testes Finalizados com Falhas')
		.addDescription('Alguns testes falharam!')
		.addFields(getCommonFields())
		.addField({ name: 'Resultado', value: `${failedCount} testes falharam`, inline: false })
		.addField({ name: 'Detalhes', value: summary || 'Sem detalhes disponíveis', inline: false })
		.addFooter(`Finalizado em ${timestamp}`)
		.sendMessage();
}

function sendErrorMessage(errorMsg) {
	const timestamp = getCurrentTimestamp();

	discordNotification
		.errorMessage()
		.addTitle('Erro Durante Execução')
		.addDescription('Ocorreu um erro inesperado durante a execução dos testes.')
		.addFields(getCommonFields())
		.addField({ name: 'Erro', value: errorMsg, inline: false })
		.addFooter(`Tempo ${timestamp}`)
		.sendMessage();
}

module.exports = {
	sendStartMessage,
	sendSuccessMessage,
	sendFailureMessage,
	sendErrorMessage,
};
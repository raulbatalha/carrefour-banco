require('dotenv').config();
const axios = require('axios');

const url = process.env.DISCORD_WEBHOOK;

axios.post(url, {
  content: 'Teste de integração com Discord realizado com sucesso!'
})
  .then(() => console.log('Mensagem enviada para o Discord!'))
  .catch(err => console.error('Erro ao enviar mensagem:', err));

# Projeto de Testes Automatizados MobileUI - Banco Carrefour com Appium & WebdriverIO

## 📋 Descrição

Este projeto é um exemplo completo de automação de testes mobile para Android e iOS utilizando **WebdriverIO**, com suporte tanto ao framework **Mocha** quanto **Cucumber**. 

Ele cobre os principais fluxos da aplicação:

- Tela Inicial _(Home)_
- Visualizar Arquivo _(WebView)_
- Acessar Sistema _(Login)_
- Cadastro _(Signup)_
- Formulários _(Form)_
- arrastar horizontal _(Swipe)_
- Montar Quadrilho _(Drag)_

A execução pode ser feita localmente ou na nuvem via **BrowserStack**.

---

## ✅ Requisitos

- Node.js (versão LTS)
- Appium Server (executando localmente)
- Appium Inspector (para inspecionar elementos)
- Android Studio (com emulador ou dispositivo conectado)
- Xcode (para simular emulador iOS)
- Aplicativo nativo `.apk` ou `.zip` para teste (fornecido)

---

## 📁 Estrutura do Projeto

```
src/
├── android/pages/        # Páginas do Android (Actions, Selectors, Asserts)
├── ios/pages/            # Páginas do iOS
├── utils/                # Arquivos de dados compartilhados (users.data.js, common.data.js)

tests/
├── specs/                # Testes em Mocha
├── features/             # Arquivos .feature (Cucumber)
├── step-definitions/     # Step definitions para os testes BDD

configs/
├── wdio.config.*.js      # Configurações específicas por plataforma/framework

.circleci/
└── config.yml            # CI com CircleCI
```

---

## 🧪 Ferramentas Utilizadas

- **WebdriverIO v8+**
- **Mocha** & **Cucumber**
- **Appium** (com `UiAutomator2` e `XCUITest`)
- **Allure** (relatórios de testes ricos)
- **BrowserStack** (execução de testes na nuvem)
- **CircleCI** (integração contínua)

---

## 🚀 Como configurar o ambiente

```bash
git clone https://github.com/seu-usuario/banco-carrefour-wdio-appium.git
cd banco-carrefour-wdio-appium
npm install
```

---

## ▶️ Como executar os testes

### Android

#### Executar todos os testes:

```bash
npm run test-android         # Mocha
npm run test-android-bdd     # Cucumber
```

#### Executar teste específico:

```bash
npm run test-android -- --spec ./tests/specs/login.spec.js
npm run test-android-bdd -- --spec ./tests/features/login.feature
```

#### Executar por suíte:

```bash
npm run test-android -- --suite loginSuite
```

#### Executar por nome do teste:

```bash
npm run test-android -- --spec ./tests/specs/login.spec.js --mochaOpts.grep "Login com sucesso"
```

---

### iOS

#### Executar todos os testes:

```bash
npm run test-ios         # Mocha
npm run test-ios-bdd     # Cucumber
```

#### Executar teste específico:

```bash
npm run test-ios -- --spec ./tests/specs/signup.spec.js
npm run test-ios-bdd -- --spec ./tests/features/signup.feature
```

#### Executar por suíte:

```bash
npm run test-ios -- --suite signupSuite
```

---

## 🧭 Possíveis Problemas Comuns

### Appium não inicia automaticamente localmente

Execute o Appium manualmente antes de iniciar os testes:

```bash
npm run start:appium
```

### WebDriverAgent (iOS) não está instalado

Abra o **Appium Inspector**, configure as desired capabilities e inicie a sessão para que o WDA seja instalado no simulador. A instalação pode demorar na primeira vez.

---

## 📊 Relatórios

### Allure Report

Após a execução dos testes, para visualizar o relatório:

```bash
npm run report:allure
```

Gera um relatório visual com:
- Status dos testes
- Screenshots (caso configurado)
- Detalhamento de steps e falhas

---

## ☁️ Integração com BrowserStack

Este projeto está configurado para rodar na nuvem via **BrowserStack**, utilizando:

- `BROWSERSTACK_USERNAME` e `BROWSERSTACK_ACCESS_KEY` via `.env`
- Upload automático do `.apk` ou `.ipa/.zip` para `storage:filename=...`
- Sessões com logs de rede, vídeos e console disponíveis no dashboard do BrowserStack

---

Feito com ❤️ para o time de Qualidade do **Banco Carrefour**.
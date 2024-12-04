# CalcIMC
Calculadora IMC em React Native 

# Calculadora de IMC (Índice de Massa Corporal)

Este repositório contém o código de uma aplicação simples em **React Native** que calcula o Índice de Massa Corporal (IMC) com base no peso e altura fornecidos pelo usuário, feito como parte do Laboratório de Extensão da UNESA, na disciplina de PROGRAMAÇÃO PARA DISPOSITIVOS MÓVEIS EM ANDROID.

## 📝 Funcionalidades

- Entrada de peso (em kg) e altura (em cm);
- Cálculo automático do IMC com base nos valores inseridos;
- Classificação do IMC em categorias:
  - Abaixo do peso;
  - Peso normal;
  - Sobrepeso;
  - Obesidade (com detalhamento dos graus I, II e III);
- Mensagens explicativas e dicas para cada classificação.

## 🛠️ Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis multiplataforma.
- **JavaScript**: Linguagem de programação usada no código.
- **StyleSheet**: API para estilização no React Native.

## 📋 Pré-requisitos

Para executar o projeto, é necessário:

1. Ter o **Node.js** instalado;
2. Instalar o **Expo CLI**:
   ```bash
   npm install -g expo-cli
   ```
3. Configurar um ambiente para desenvolvimento React Native.

## 🚀 Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/calculadora-imc.git
   cd calculadora-imc
   ```

2. Instale as dependências do projeto:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   expo start
   ```

4. Abra o aplicativo no seu dispositivo móvel usando o app **Expo Go** (disponível na Play Store e App Store) ou emuladores configurados.

## 📱 Interface

A aplicação possui uma interface simples e intuitiva, composta por:

- Título do aplicativo;
- Campos de entrada para peso e altura;
- Botão para realizar o cálculo;
- Exibição do resultado com a classificação do IMC e mensagens explicativas.

## 💡 Como funciona o cálculo do IMC?

A fórmula utilizada é:
```
IMC = peso (kg) / (altura (m)²)
```

Com base no resultado, o aplicativo classifica o IMC nas seguintes categorias:

- **Abaixo de 18.5**: Abaixo do peso
- **Entre 18.5 e 24.9**: Peso normal
- **Entre 25 e 29.9**: Sobrepeso
- **Acima de 30**: Obesidade (com subdivisões I, II e III)

## 🖌️ Estilo

- A aplicação utiliza um esquema de cores moderno e minimalista:
  - **Fundo azul (#2596be)**;
  - **Botões verdes (#48a160)**;
  - **Entradas brancas com bordas suaves**.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir **Issues** ou enviar **Pull Requests**.

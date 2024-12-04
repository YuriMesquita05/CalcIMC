import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";



export default function App() {
  const [peso, setPeso] = useState(""); // Estado para o peso
  const [altura, setAltura] = useState(""); // Estado para a altura
  const [resultado, setResultado] = useState(""); // Estado para o resultado do IMC

  const calcularIMC = () => {
    // Validação para evitar erros com campos vazios
    if (!peso || !altura) {
      setResultado("Por favor, preencha todos os campos!");
      return;
    }

    const alturaEmMetros = parseFloat(altura) / 100; // Converter altura para metros
    const imc = parseFloat(peso) / (alturaEmMetros * alturaEmMetros); // Fórmula do IMC

    let classificacao = "";
    if (imc < 18.5) {
      classificacao = "Abaixo do peso \nConsulte um médico. O baixo peso pode ser natural ou indicar problemas, como desnutrição. É importante avaliar.";
    } else if (imc >= 18.5 && imc < 24.9) {
      classificacao = "Peso normal \nParabéns pelo peso normal! Mantenha-o com um estilo de vida ativo e alimentação equilibrada.";
    } else if (imc >= 25 && imc < 29.9) {
      classificacao = "Sobrepeso \nÉ uma fase de pré-obesidade, com riscos de doenças como diabetes e hipertensão. É crucial mudar hábitos e buscar ajuda para evitar a obesidade.";
    } else {
      classificacao = "Obesidade \nA obesidade pode ter até 3 niveis: \nI - Entre 30,0 e 34,9 é um sinal de alerta aos individuos para que busquem cuidados com a saúde. \nII - Entre 35,0 e 39,9 é indicado já o inicio das atividades fisicas como prevenção de uma piora no quadro de saúde. \nIII - Acima de 40,0 tem probabilidade de já existirem doenças muito graves associadas. Tratamento urgente.";
    }

    setResultado(`Seu IMC é ${imc.toFixed(2)} ${classificacao}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        keyboardType="numeric"
        value={peso}
        onChangeText={(text) => setPeso(text)}
      />

      <TextInput
        style={styles.input}
        placeholder="Altura (cm)"
        keyboardType="numeric"
        value={altura}
        onChangeText={(text) => setAltura(text)}
      />

      <TouchableOpacity style={styles.button} onPress={calcularIMC}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#2596be",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    width: "80%",
    height: 50,
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#48a160",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
  },
});
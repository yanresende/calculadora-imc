import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [imc, setIMC] = useState(null);
  const [classificacao, setClassificacao] = useState("");

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const calculoIMC = peso / (alturaMetros * alturaMetros);
    const arredondadoIMC = parseFloat(calculoIMC.toFixed(2));
    setIMC(arredondadoIMC);
    setClassificacao(classificarIMC(arredondadoIMC));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc < 24.9) return "Peso normal";
    if (imc >= 25 && imc < 29.9) return "Sobrepeso";
    if (imc >= 30 && imc < 34.9) return "Obesidade grau 1";
    if (imc >= 35 && imc < 39.9) return "Obesidade grau 2";
    return "Obesidade grau 3";
  };

  return (
    <div className="container mt-5">
      <h1>Calculadora de IMC</h1>
      <div className="form-group">
        <label>Altura (cm):</label>
        <input
          type="number"
          className="form-control"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Peso (kg):</label>
        <input
          type="number"
          className="form-control"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={calcularIMC}>
        Calcular IMC
      </button>
      {imc !== null && (
        <div className="mt-3">
          <h2>Resultado:</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
};

export default App;

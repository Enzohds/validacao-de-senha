import { useState } from "react";
import './App.css';

const PasswordChecker = () => {
const [password, setPassword] = useState('');
const [requirements, setRequiriments] = useState({
  uppercase:false,
  lowercase:false,
  numbers:false,
  symbols:false,
  length:false,
});

const checkPassword = (value) => {
  const updateRequiriments = {
    uppercase: /[A-Z]/.test(value),
    lowercase: /[a-z]/.test(value),
    numbers: /\d/.test(value),
    symbols: /\W/.test(value),
    length: value.length >= 8,
  };

  setRequiriments(updateRequiriments);
}
  const handleCharge = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPassword(value);
  }

  const buttonDisabled = Object.values(requirements).includes(false)

  const handleButtonClick = () => {
    if(!buttonDisabled){
      console.log('botao clicado');
    }
  }

  return (
    <div className="password-checker">
      <div className="box">
        <input type="password" value={password} onChange={handleCharge} />

        <button className="submit-button" onClick={handleButtonClick}
        desabled={buttonDisabled}>
          Clique aqui
        </button>
      </div>

      <ul className="requirimetents-list">
        <li className={requirements.uppercase ? "fulfilled" : 
          "unfulfilled"}> Letra Maiuscula </li>
        <li className={requirements.lowercase ? "fulfilled" : 
          "unfulfilled"}> Letra Minuscula </li>
        <li className={requirements.numbers ? "fulfilled" : 
          "unfulfilled"}> Numeros </li>
        <li className={requirements.symbols ? "fulfilled" : 
          "unfulfilled"}> Simbolos</li>
        <li className={requirements.length ? "fulfilled" : 
          "unfulfilled"}> Tamanho minimo de 8 caracteres</li>
      </ul>
    </div>
  )


}
export default PasswordChecker;
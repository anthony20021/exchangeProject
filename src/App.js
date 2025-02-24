import './App.css';
import { useState, useEffect } from 'react';
import Button from './Btn.jsx';
import Input from './Input.jsx';
import Select from './Select.jsx';



function App() {
  const [amount, setCount] = useState(10);
  const [amount2, setCount2] = useState(0);
  const [money1, setMoney1] = useState('USD');
  const [money2, setMoney2] = useState('EUR');
  const [type, setType] = useState([]);

  const change = async () => {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.REACT_APP_API_KEY}&currencies=${money2}&base_currency=${money1}`);
    const data = await response.json();
    const result = data.data[money2];
    setCount2(result * parseFloat(amount));
  }

  const getTypes = async () => {
    const response = await fetch(`https://api.freecurrencyapi.com/v1/currencies?apikey=${process.env.REACT_APP_API_KEY}`);
    const data = await response.json();
    console.log( Object.keys(data.data));
    const codes = Object.keys(data.data);
    setType(codes);
  }

  useEffect(() => {
    getTypes();
  }, [])


  return (
    <div className="App">
      <Input text="Montant à échanger" change={(e) => setCount(e.target.value)} type="number" id={"amount1"} />
      <Select text="Devise" change={(e) => setMoney1(e.target.value)} id={"money1"} tableau={type} />
      <Select text="Devise" change={(e) => setMoney2(e.target.value)} id={"money2"} tableau={type} />
      <Button text="Convert" click={change} />

      <p>Resultat : {amount2}</p>
    </div>
  );
}

export default App;

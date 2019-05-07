import React,{useState, useEffect} from 'react';

export default (props) => {
    let [count, setCount] = useState(0);
    let [text, setText] = useState("Нажми на меня");

    // По принципу componentDidMount и componentDidUpdate:
  useEffect(() => {
    // Обновляем заголовок документа, используя API браузера
    console.log ( `Вы нажали ${count} раз`);
  });

    return (
    <div>
        <p>Вы нажали на кнопку: {count}</p>
        <button disabled = {text === 'попался'} onClick = {() => {setCount(count += 1); setText('попался')}}>{text}</button>
    </div>
    )
}
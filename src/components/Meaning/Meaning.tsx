import { useRef, useState } from 'react';

const Meaning = ({value}: {value: string}) => {
  const [result, setResult] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const showResult = () => {
    setResult(value === (ref.current as HTMLInputElement).value ? '✔' : '✗')
  }

  return (<>
    <input type="text" name="kanji-meaning" id="meaning-input" placeholder="SIGNIFICADO" ref={ref} />
    <button type="button" onClick={showResult}>Check</button>
    <span>{result}</span>
  </>);
};

export default Meaning;
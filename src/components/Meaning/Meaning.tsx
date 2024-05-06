import { useRef, useState } from 'react';

import '../../App.css';

const Meaning = ({value}: {value: string}) => {
  const [result, setResult] = useState('');
  const ref = useRef<HTMLInputElement>(null);

  const correctValue = '✔';
  const wrongValue = '✗';

  const showResult = () => {
    setResult(value.toLowerCase() === (ref.current as HTMLInputElement).value.toLowerCase() ? correctValue : wrongValue)
  }

  return (<>
    <div className="row">
      <input type="text" name="kanji-meaning" id="meaning-input" placeholder="SIGNIFICADO" ref={ref} />
    </div>
    <div className="row">
      <button className="bnt-check half" type="button" onClick={showResult}>
        Check
        <span className={`icon ${result === correctValue ? 'success' : 'error'}`}>{result}</span>
      </button>
    </div>
  </>);
};

export default Meaning;
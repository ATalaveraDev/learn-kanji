import { useState } from 'react';
import Sensei from '../../data/main';
import Exercises from '../Exercises/Exercises';
import Meaning from '../Meaning/Meaning';

const FromJapaneseToSpanish = () => {
  const [data, setData] = useState(Sensei.getRandomKanji());

  const clickHandler = () => {
    setData(Sensei.getRandomKanji());
  };

  return <>
    <h1>{data.kanji}</h1>
    <Meaning value={data.meanings[0]} />
    <Exercises />
    <button className="full" type="button" onClick={clickHandler}>Siguiente Kanji</button>
  </>
};

export default FromJapaneseToSpanish;
import Sensei from '../../data/main';
import Exercises from '../Exercises/Exercises';
import Meaning from '../Meaning/Meaning';

const FromJapaneseToSpanish = () => {
  const data = Sensei.getRandomKanji();

  return <>
    <h1>{data.kanji}</h1>
    <Meaning value={data.meanings[0]} />
    <Exercises />
    <button type="button">Siguiente Kanji</button>
  </>
};

export default FromJapaneseToSpanish;
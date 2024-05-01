import Sensei from '../../data/main';
import Exercises from '../Exercises/Exercises';
import Meaning from '../Meaning/Meaning';

const FromJapaneseToSpanish = () => {
  const data = Sensei.getRandomKanji();

  return <>
    <p>{data.kanji}</p>
    <Meaning value={data.meanings[0]} />
    <Exercises />
    <button type="button">Siguiente Kanji</button>
  </>
};

export default FromJapaneseToSpanish;
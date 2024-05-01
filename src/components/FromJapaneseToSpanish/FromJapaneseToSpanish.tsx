import Sensei from '../../data/main';
import Exercises from '../Exercises/Exercises';

const FromJapaneseToSpanish = () => {
  const data = Sensei.getRandomKanji();

  return <>
    <p>{data.kanji}</p>
    <input type="text" name="kanji-meaning" id="meaning-input" />
    <button type="button">Check</button>
    <span>✔</span>
    <span>✗</span>
    <Exercises />
    <button type="button">Siguiente Kanji</button>
  </>
};

export default FromJapaneseToSpanish;
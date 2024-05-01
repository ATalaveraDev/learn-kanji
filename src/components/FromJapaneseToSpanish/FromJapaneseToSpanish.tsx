import Exercises from '../Exercises/Exercises';

const FromJapaneseToSpanish = () => {
  return <>
    <p>大</p>
    <input type="text" name="kanji-meaning" id="meaning-input" />
    <button type="button">Check</button>
    <span>✔</span>
    <span>✗</span>
    <Exercises />
    <button type="button">Siguiente Kanji</button>
  </>
};

export default FromJapaneseToSpanish;
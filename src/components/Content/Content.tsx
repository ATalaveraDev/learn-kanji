import { useAppStateContext } from '../../state/context';
import FromJapaneseToSpanish from '../FromJapaneseToSpanish/FromJapaneseToSpanish';

const FromSpanishToJapanese = () => {
  return <p>From SPa</p>
};

const Content = () => {
  const state = useAppStateContext();

  return (
    <section>
      {state.mode === 'JAP_ESP' ? <FromJapaneseToSpanish /> : <FromSpanishToJapanese />}
    </section>
  );
};

export default Content;
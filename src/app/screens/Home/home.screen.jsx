import { useClientRect } from 'hooks';
import { default as testa } from '../../shared/styles/variables';

// jsx
import template from './home.screen.pug';
import { primary } from './home.screen.scss';


console.log(primary);
console.log(testa);

function Home() {
  const [rect, clientRef] = useClientRect(['height', 'width'], null);

  return template({
    // variables
    clientRef,
    rect,
  });
}

export default Home;

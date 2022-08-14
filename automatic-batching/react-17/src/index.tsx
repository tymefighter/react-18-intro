// Libraries
import { render } from 'react-dom';

// Components
import { App } from 'App';

const rootElement = document.createElement('div');
rootElement.id = 'react-root';
document.body.append(rootElement)

render(
  <App />,
  rootElement
);

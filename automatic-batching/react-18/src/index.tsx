// Libraries
import { createRoot } from 'react-dom/client';

// Components
import { App } from 'App';

const rootElement = document.createElement('div');
rootElement.id = 'react-root';
document.body.append(rootElement)

const root = createRoot(
  rootElement
);

root.render(
  <App />
);

import { HelmetProvider } from 'react-helmet-async';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

if (container.hasChildNodes()) {
  ReactDOM.hydrateRoot(
    container,
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );
} else {
  root.render(
    <HelmetProvider>
      <App />
    </HelmetProvider>,
  );
}

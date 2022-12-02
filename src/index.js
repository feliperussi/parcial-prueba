import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";

const root = ReactDOM.createRoot(document.getElementById('root'));

// Detect language of the browser
const language = navigator.language.split(/[-_]/)[0];
if (language === 'es') {
      root.render(
      <IntlProvider locale={language} messages={localeEsMessages}>
            <App />
      </IntlProvider>
      );
}
else {
      root.render(
      <IntlProvider locale={language} messages={localeEnMessages}>
            <App />
      </IntlProvider>
      );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
serviceWorkerRegistration.register();

reportWebVitals();

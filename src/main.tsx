import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.css'
import App from './App.tsx'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
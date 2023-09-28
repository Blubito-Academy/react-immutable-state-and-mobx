import { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RootStore } from "./store/RootStore.ts";

// eslint-disable-next-line react-refresh/only-export-components
export const RootStoreContext = createContext<RootStore>(new RootStore());

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RootStoreContext.Provider value={new RootStore()}>
    <App />
  </RootStoreContext.Provider>
);

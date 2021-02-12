import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./Redux/Store";
import Routes from "./Routes";

function App() {
  return (
    <div className="Talentadore-App">
      <Provider store={ConfigureStore()}>
        <Routes />
      </Provider>
    </div>
  );
}

export default App;

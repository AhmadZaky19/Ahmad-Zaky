import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import './App.css';
import { Provider } from "react-redux";
import store from "./stores/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;

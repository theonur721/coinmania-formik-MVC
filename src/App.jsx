import MainPageController from "./controllers/MainPageController";
import LoginForm from "./pages/LoginForm";
import "./style.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderView from "./views/HeaderView";

const App = () => {
  return (
    <>
      <HeaderView />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/coins" element={<MainPageController />} />
      </Routes>
    </>
  );
};

export default App;

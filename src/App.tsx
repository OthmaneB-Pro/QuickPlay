import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import ErrorPage from "./components/pages/error/ErrorPage";
import TicTacToePage from "./components/pages/ticTacToe/TicTacToePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tictactoe" element={<TicTacToePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

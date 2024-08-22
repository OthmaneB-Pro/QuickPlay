import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/home/HomePage";
import ErrorPage from "./components/pages/error/ErrorPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

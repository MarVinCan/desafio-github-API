import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./rotes/Home";
import HomeBody from "./rotes/Home/HomeBody";
import SearchPage from "./rotes/Home/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<SearchPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

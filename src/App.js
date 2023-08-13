import "./App.css";
import Main from "./components/Main";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Page from "./components/page/Page";
import PageTwo from "./components/page/PageTwo";
import Search from "./components/search/Search";
import Notif from "./components/notif/Notif";
import PageThree from "./components/page/PageThree";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="vidio/:vidioId" element={<Page />} />
        <Route path="vidioRow2/:vidioId" element={<PageTwo />} />
        <Route path="vidioRow3/:vidioId" element={<PageThree />} />
        <Route path="search" element={<Search />} />
        <Route path="notif" element={<Notif />} />
      </Route>
    </Routes>
  );
}

export default App;

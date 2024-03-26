import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./app.scss";

import Tile from "../table";
import Pagination from "../pagination/pagination";
import Form from "../form";
import Header from "../header";
import Navbar from "../navbar";

function useTracksScreenWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = ($event) => {
      setWidth($event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

function App() {
  const width = useTracksScreenWidth();
  console.log(width);

  return (
    <div className="app">
      <Header />
      <div className="layout">Layout</div>
      <div className="mobile">Блок для мобилки</div>
      <Navbar />
      <Routes>
        <Route
          path="/MediaSoft"
          element={
            <>
              <Tile />
              <Pagination />
            </>
          }
        />
        <Route
          path="/MediaSoft/:id"
          element={
            <>
              <Tile />
              <Pagination />
            </>
          }
        />
        <Route path="/Form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;

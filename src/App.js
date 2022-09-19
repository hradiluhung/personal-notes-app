import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Homepage from "./pages/Homepage";
import Archive from "./pages/Archive";
import AddNote from "./pages/AddNote";
import NotFound from "./pages/NotFound";
import DetailNote from "./pages/DetailNote";

const App = () => {
  return (
    <div className="note-app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/note/:id" element={<DetailNote />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;

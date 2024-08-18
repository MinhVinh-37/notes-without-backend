import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      <Note />
      <Footer />
    </div>
  );
}

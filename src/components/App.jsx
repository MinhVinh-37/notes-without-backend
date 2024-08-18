import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

export default function App() {
  var [items, setItems] = useState([{ title: "test", content: "test too" }]);

  function addItem(title, content) {
    setItems((preItems) => {
      return [...preItems, { title: title, content: content }];
    });
  }

  function deleteItem(id) {
    setItems((preItems) => {
      return preItems.filter((item, index) => id !== index);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addItem={addItem} />
      {items.map((item, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteItem={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

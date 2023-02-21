import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header"
import Footer from "./components/Footer"
import HandleComponents from "./components/HandleComponents"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header></Header>

    <HandleComponents></HandleComponents>

    <Footer></Footer>
  </React.StrictMode>
);


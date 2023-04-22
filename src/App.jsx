import React from "react";
import "./App.css";
import Header from "./components/Header";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Banner from "./components/Banner";
import RechargePayBar from "./components/RechargePayBar";
import BookBuyBar from "./components/BookBuyBar";
import Banner2 from "./components/Banner2";
import './App.css'
import PytmMoney from "./components/PytmMoney";
import Footer from "./components/Footer";

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="./logo.svg" />
        </Helmet>
        <Header />
        <Banner/>
        <RechargePayBar/>
        <BookBuyBar/>
        <Banner2/>
        <PytmMoney/>
        <Footer/>
      </div>
    </HelmetProvider>

  );
}

export default App;

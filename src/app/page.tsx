import React from "react";
import { NextPage } from "next";
import Header from "@/components/home/header";
import Slide from "@/components/home/slide";

const App: NextPage = () => {
  return (
    <div>
      <Header />
      <Slide />
    </div>
  );
};

export default App;

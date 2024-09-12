import MainHead from "@/Components/Headings/MainHead";
import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Nav/Sections/Footer";
import React from "react";
import Page1 from "./component/Page1";
import Page2 from "./component/Page2";

const page = () => {
  return (
    <div className="w-full h-screen py-[4rem]  ">
      <Nav />
      <Page1 />
      <Page2 />
      <Footer />
    </div>
  );
};

export default page;

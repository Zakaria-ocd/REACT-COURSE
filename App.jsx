// import Header from "./Header"
// import AsideMenu from "./AsideMenu"
// import Body from "./Body";
// import FormState from "./FormState";
// import GerereStagiaire from "./GerereStagiaire";
// import MyInput from "./MyInput";
// import Test from "./test";
// import GestionStagiaires from "./formStagiaires/GestionStagiaires";
// import InputClass from "./inputClass";
// import FormStgsExpress1 from "./express-react/FormStgsExpress1";

import AppEfm from "./AppEfm";

// import { useEffect } from "react";
// import { useState } from "react";

// import AsyncAwait from "./AsyncAwait";
// import InputClass from "./InputClass";
// import FormStgsExpress1 from "./express-react/FormStgsExpress1";

/* 2024 EFF V1*/
// import Experts1 from "./Regio2024/Experts1";
// import Experts2 from "./Regio2024/Experts2";
// import Formulaire from "./Regio2024/Formulaire";
// Routes
// import { Route, Routes } from "react-router-dom";
// import RevApp from "./revAppAndTest/revApp";
// import Navbar from "./Navbar";
// import Expert from "./Expert";
// import Experts1 from "./Regio2024/Experts1";

/* 2023 EFF V1*/
// import { useEffect, useState } from "react";
// import Composant1 from "./2023-EffV1/Composant1";
// import Composant2 from "./2023-EffV1/Composant2";
// import Composant3 from "./2023-EffV1/Composant3";
// import { Route, Routes } from "react-router-dom";

export default function App() {
  // const [salaries, setSalaries] = useState([]);
  // useEffect(function () {
  //   async function importData() {
  //     const data = await fetch("http://localhost:3000/salaries");
  //     const initialSalaries = await data.json();
  //     setSalaries(initialSalaries);
  //   }
  //   importData();
  // }, []);
  return (
    <>
      {/* <Header></Header>
      <div className="flex  w-full">
        <AsideMenu></AsideMenu>
        <Body></Body>
      </div> */}
      {/* <Test></Test>
      <MyInput></MyInput>
      <FormState></FormState> */}
      {/* // <GestionStagiaires></GestionStagiaires> */}
      {/* <FormStgsExpress1></FormStgsExpress1> */}
      {/* <InputClass></InputClass> */}
      {/* 2024 EFF V1*/}
      {/* <Experts1></Experts1>
      <Formulaire></Formulaire>
      <Experts2></Experts2> */}
      {/* <InputClass></InputClass> */}
      {/* <AsyncAwait></AsyncAwait> */}
      {/* useLocation */}
      {/* react querry */}
      {/* Routes */}
      {/* <Routes>
        <Route path="/" element={<><Navbar></Navbar> <RevApp></RevApp></>} />
        <Route path="/Home" element={<><Navbar></Navbar> <RevApp></RevApp></>} />
        <Route path="/Experts" element={<Experts1 />}></Route>
        <Route path="/Expert/:id" element={<Expert />}></Route>
      </Routes> */}
      {/* 2023 EFF V1 */}
      {/* <div className="w-full pb-6 flex flex-col  items-center ">
        <Composant1></Composant1>
        <Routes>
          <Route
            path="/Composant2"
            element={<Composant2 salaries={salaries}></Composant2>}
          ></Route>
          <Route
            path="/Composant3"
            element={<Composant3 salaries={salaries}></Composant3>}
          ></Route>
        </Routes>
      </div> */}
      <AppEfm/>
    </>
    
  );
}

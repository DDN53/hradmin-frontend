import React from "react";
import "./Home.css";
import { ClientLogo, ClientReason, Footer, Header, News, Service, Slider, Stats, Wellcome} from "../components";

export default function Home() {
  return (
    <div className="container">
      <Header/>
      <Slider/>
     
      <Wellcome/>
      <Service/>
      <Stats/>
      <ClientReason/>
      <ClientLogo/>

      <News/>
      
      <Footer/>
    </div>
  );
}
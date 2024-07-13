import React from "react";
import "./Clientlogo.css";
import { client1, client2, client3, client4, client5 } from "../../assests";

export default function ClientLogos() {
  return (
    <section className="client-logos">
      <div className="logos-container">
        <img className="client-image" src={client1} alt="Client 1" />
        <img className="client-image" src={client2} alt="Client 2" />
        <img className="client-image" src={client3} alt="Client 3" />
        <img className="client-image" src={client4} alt="Client 4" />
        <img className="client-image" src={client5} alt="Client 5" />
      </div>
    </section>
  );
}

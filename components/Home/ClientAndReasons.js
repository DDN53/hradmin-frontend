import React from "react";
import "../Home/ClientAndReasons.css";

import { WhyChooseUs, TrustedClient } from "../index";

export default function ClientAndReasons() {
  return (
    <div className="clients-and-reasons">
      <TrustedClient />
      <WhyChooseUs />
    </div>
  );
}

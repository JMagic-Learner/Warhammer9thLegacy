import React from "react";
import { Banner } from "../../components/Banner";
import Warhammer9thBanner from "../../Assets/w40k9.jpg";

export function Home() {
  return (
    <div className="w-100">
      <Banner image={Warhammer9thBanner} />

      <div className="mt-1 mb-1"></div>
    </div>
  );
}

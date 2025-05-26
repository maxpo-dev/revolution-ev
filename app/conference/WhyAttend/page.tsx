"use client"

import React from "react";
// import RevolutionBanner from "../exhibition/WhyExhibit/revolution-ev-component";
import RevolutionEVSection from "./RevolutionEvSection";
// import WhyAttendEVConferen;
import Component from "./WhyAttend";

export default function Main(){
    return(
        <div>
            <RevolutionEVSection/>
            <Component/>
        </div>
//         <div className="bg-white h-screen flex items-center justify-center">
//   <h1 className="text-4xl font-bold text-black">This Page Is being Updated</h1>
// </div>
    );
}
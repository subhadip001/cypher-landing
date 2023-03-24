import React from "react";
import backMiniImage from "../../assets/background-mini.png";
import backNotifyImage from "../../assets/back-notify.png";

const Notify = () => {
  return (
    <div className="h-[90vh] w-[80%] mx-auto">
      <div className="left w-[532px] h-[246px] fadeIn relative mx-auto top-12 z-10">
        <img src={backMiniImage} className="bg-transparent" alt="" />
        <span className="absolute font-rugen stroke-text text-5xl top-[3.75rem] bg-transparent left-[11.43rem]">
          WE ARE
        </span>
        <span className="absolute font-paladin text-7xl top-[7.87rem] bg-transparent left-[2.25rem]">
          CYPHER
        </span>
      </div>
      <div className="w-full relative fadeIn">
        <img
          src={backNotifyImage}
          alt=""
          className="w-full h-[300px] bg-transparent"
        />
        <div className="w-[80%] h-[64px] flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-2xl border border-white">
          <input
            className="block w-[80%] h-full rounded-l-2xl px-5 py-2"
            type="email"
            name=""
            id=""
            placeholder="your email here"
          />
          <button className="w-[20%] h-full text-2xl text-[#050C31] bg-white rounded-r-2xl">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notify;

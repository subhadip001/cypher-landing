import React, { useState } from "react";
import backgroundImage from "../../assets/background.png";
import arrowImage from "../../assets/arrow.png";
import { ImMusic } from "react-icons/im";
import { Link } from "react-router-dom";

const Home = () => {
  const [bgColor1, setBgColor1] = useState("bg-transparent");
  const [bgColor2, setBgColor2] = useState("bg-transparent");

  function handleClick(n) {
    if (n===1){
      setBgColor1("bg-[#01051a]");
    }
    else{
      setBgColor2("bg-[#01051a]")
    }
    
  }
  function handleUp() {
    setBgColor1("bg-tarnsparent");
    setBgColor2("bg-tarnsparent");
  }

  return (
    <>
      <section className="h-[90vh] w-[80%] mx-auto -z-10">
        <div className="mt-[11rem] relative">
          <a
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            target="_blank"
          >
            <div
              onMouseDown={()=>{handleClick(1)}}
              onMouseUp={handleUp}
              className={`flex cursor-pointer clip-path-triangle z-30 ${bgColor1} h-[125px] w-[145px] p-5 items-end text-4xl absolute border-2 border-white rounded-lg top-[23.9rem] left-6`}
            >
              {" "}
              <ImMusic className="bg-transparent" />
            </div>
          </a>
          <Link to="/notify">
            <div
              onMouseDown={()=>{handleClick(2)}}
              onMouseUp={handleUp}
              className={`flex cursor-pointer z-30 ${bgColor2} clip-path-trap justify-center item-center h-[70px] w-[276px] p-5 items-end text-4xl absolute border-2 border-white rounded-lg top-[27rem] right-6`}
            >
              <span className="font-semibold text-2xl bg-transparent">Notify Me</span>
            </div>
          </Link>
          <img
            className="absolute z-20 bg-transparent w-full"
            src={backgroundImage}
            alt=""
            loading="lazy"
          />
          <img
            className="absolute right-[12.5rem] top-5 z-10"
            src={arrowImage}
            alt=""
          />
          <span className="font-rugen absolute stroke-text text-5xl bg-transparent z-[30] left-[65px] top-[150px]">
            WE WILL BE
          </span>
          <span className="font-paladin absolute text-7xl bg-transparent z-[30] left-[65px] top-[205px]">
            LAUNCHING
          </span>
          <span className="font-rugen absolute stroke-text text-5xl bg-transparent z-[30] left-[65px] top-[275px]">
            SUPER
          </span>
          <span className="font-paladin absolute text-8xl bg-transparent z-[30] left-[325px] top-[275px]">
            SOON
          </span>
          <div className="absolute font-w95fa text-2xl z-30 bg-transparent right-[55px] top-[300px]">
            <span className="bg-transparent">Cypher talents are</span>
            <br />
            <span className="bg-transparent">
              diligently engaged in crafting
            </span>
          </div>
          <span className="absolute font-w95fa text-2xl z-30 left-[220px] bg-transparent top-[450px]">
            Here is some music while you wait to get cyphered.
          </span>
        </div>
      </section>
    </>
  );
};

export default Home;

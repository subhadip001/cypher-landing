import React from "react";
import backMiniImage from "../../assets/background-mini.png";

const About = () => {
  return (
    <main className="h-[90vh] w-[80%] mx-auto">
      <section className="top flex justify-between items-center">
        <div className="left w-[532px] h-[246px] relative fadeIn">
          <img src={backMiniImage} loading="lazy" alt="" />
          <span className="absolute font-rugen stroke-text text-5xl top-[3.75rem] bg-transparent left-[11.43rem]">
            WE ARE
          </span>
          <span className="absolute font-paladin text-7xl top-[7.87rem] bg-transparent left-[2.25rem]">
            CYPHER
          </span>
        </div>
        <div className="right">
          <p className="text-[2.625rem] font-normal w-[562px] font-w95fa">
            We are excited to announce our upcoming launch and introduce
            ourselves to you.
          </p>
        </div>
      </section>
      <div className="bottom flex items-center h-[55vh]">
        <p className="text-2xl font-light">
          We are a chat platform in making, dedicated to bringing people
          together through meaningful conversations and connections. Our mission
          is to create a product where users can connect, share their
          experiences, and become part of a healthy social society. <br />
          <br />
          As a team, we are committed to providing exceptional experience on our
          platform. Our service is built on a foundation of trust, respect, and
          inclusivity, and we are dedicated to upholding these values. <br />
          <br />
          We look forward to launching soon and welcoming you to our community.
          Stay tuned for updates and be sure to join us on our journey!{" "}
        </p>
      </div>
    </main>
  );
};

export default About;

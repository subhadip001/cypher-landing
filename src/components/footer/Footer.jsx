import React from "react";
import linkedIn from "../../assets/linkedin.png";
import mailIcon from "../../assets/mail.png";

const Footer = () => {
  return (
    <div id="contact" className="">
      <hr />
      <footer className="flex justify-between w-[87%] m-auto h-[124px] items-center">
        <div className="left flex gap-8">
          <a
            href="https://www.linkedin.com/company/92510561/admin/?feedType=following"
            target="_blank"
          >
            <img src={linkedIn} alt="linkedin" height="36px" width="36px" />
          </a>
          <a href="mailto:cypherappservice@cypher.org.in" target="_blank">
            <img src={mailIcon} alt="mail" height="36px" width="36px" />
          </a>
        </div>
        <div className="right ">
          <span>&copy; 2023 Cypher Apps | All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

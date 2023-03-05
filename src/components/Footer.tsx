import linkedin from "../assets/images/linkedin.png";
import github from "../assets/images/github.png";
import email from "../assets/images/email.png";
import { Typography } from "@mui/material";

function Footer() {
  const imageStyle = {
    margin: "15px 10px",
    width: 50,
    height: 50,
    borderRadius: "50%"
  };

  return (
    <>
      <div style={{
        backgroundColor: "#ED553B",
        padding: "30px 0px"
      }}>
        <a href="https://www.linkedin.com/in/austin-fullwood/">
          <img
              src={linkedin}
              alt="linkedin"
              style={imageStyle}
          />
        </a>
        <a href="https://github.com/austin-fullwood">
          <img
              src={github}
              alt="github"
              style={imageStyle}
          />
        </a>
        <a href="mailto: fullwood.austin@gmail.com">
          <img
              src={email}
              alt="email"
              style={imageStyle}
          />
        </a>
        <Typography>Copyright 2023 &#x2022; Austin The Engineer</Typography>
      </div>
    </>
  );
}

export default Footer;
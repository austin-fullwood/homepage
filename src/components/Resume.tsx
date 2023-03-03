import { Link, Typography } from "@mui/material";
import ResumeImage from "../assets/images/resume.png";
import ResumeFile from "../assets/files/resume.pdf";

function Resume() {
  return (
    <>
      <div>
        <Typography variant="h2" sx={{marginTop: "10px"}}>Resume</Typography>
        <Typography variant="h5" sx={{marginBottom: "10px"}}>(<Link href={ResumeFile} underline="hover" download>Download</Link>)</Typography>
      </div>
      <img
        src={ResumeImage}
        style={{
          width: "75%",
          margin: "auto"
        }}
        alt="Resume"
      />
    </>
  )
}

export default Resume;
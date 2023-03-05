import { Button } from "@mui/material";
import ResumeImage from "../../assets/images/resume.png";
import ResumeFile from "../../assets/files/resume.pdf";
import styles from "./Resume.module.scss";

function Resume() {
  return (
    <div className={styles.container}>
      <img
        className={styles.resumeImage}
        src={ResumeImage}
        alt="Resume"
      />
      <Button
        className={styles.button}
        variant="contained"
        href={ResumeFile}
        download
      >
        Download
      </Button>
    </div>
  )
}

export default Resume;
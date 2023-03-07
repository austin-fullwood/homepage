import { Typography } from "@mui/material";
import Me from "../../assets/images/me.jpg";
import ArrowMe from "../../assets/images/drawing_me.png";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.component}>
      <div className={styles.leftContainer}>
        <img src={Me} alt="Me" className={styles.meImage} />
        <img
          src={ArrowMe}
          alt="ArrowMe"
          className={styles.arrowMeImage}
        />
      </div>
      <div className={styles.rightContainer}>
        <div>
          <Typography variant="h4">
            Thanks for swinging by!
          </Typography>
          <Typography variant="body1">
            Website is currently (kinda always) in progress, but enjoy the current iteration. <br/>
            Also, feel free to hit me up using one of the links at the bottom.
          </Typography>
        </div>
        <div>
          <Typography variant="h4">
            Me In Bullet Points
          </Typography>
          <Typography variant="body1" >
            <b>Job</b><br/>
            Software Engineer At Bluesight (Platform)<br/>
            <b>School</b><br/>
            Virginia Tech (Class 2021)<br/>
            <b>Hometown</b><br/>
            Virginia Beach, VA<br/>
            <b>Hobbies</b><br/>
            Traveling, Surfing, Snowboarding, Video Games
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;

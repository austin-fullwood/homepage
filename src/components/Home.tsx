import { Grid, Link, Typography } from "@mui/material";
import Me from "../assets/images/me.jpg";
import DrawingMe from "../assets/images/drawing_me.png";

function About() {
  return (
    <Grid container>
      <Grid xs={6} sx={{
        position: "relative",
        top: 0,
        left: 0
      }}>
        <img
          src={Me}
          alt="Me"
          style={{
            margin: 15,
            borderRadius: "50%",
            width: 500,
            height: 500,
            borderWidth: "2px",
            position: "relative",
            top: 0,
            left: 0
          }}
        />
        <img
          src={DrawingMe}
          alt="DrawingMe"
          style={{
            width: "30%",
            height: "30%",
            position: "absolute",
            top: 10,
            left: 10
          }}
        />
      </Grid>
      <Grid xs={6} sx={{ margin: "auto", padding: "0px 30px", textAlign: "left" }}>
        <div style={{ margin: "25px 0px"}}>
          <Typography variant="h4">
            Sup my dude! Thanks for swinging by!
          </Typography>
          <Typography variant="body1">
            Website is currently (well kinda always) in progress, but enjoy the current iteration. Also, feel free
            to hit me up using one of the links at the bottom.
          </Typography>
        </div>
        <div style={{ margin: "25px 0px"}}>
          <Typography variant="h4">
            Me In Bullet Points
          </Typography>
          <Typography variant="body1" >
          <ul style={{listStyle: "none", display: "table", padding: 0}}>
            <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>Job:</b>Software Engineer At Bluesight (Platform Team)</li>
            <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>School:</b>Virginia Tech (Class of 2021)</li>
            <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>Hometown:</b>Virginia Beach, VA</li>
            <li style={{display: "table-row"}}>
              <b>Hobbies:</b>
              <ul style={{}}>
                <li style={{}}>Traveling</li>
                <li style={{}}>Surfing</li>
                <li style={{}}>Snowboarding</li>
                <li style={{}}>Video Games</li>
              </ul>
            </li>
          </ul>
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default About;
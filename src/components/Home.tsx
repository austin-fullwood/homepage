import { Grid, ImageList, ImageListItem, Typography } from "@mui/material";
import me from "../assets/images/me.jpg";

function About() {

  const itemData = Array(10).fill(
    [
      {
        img: "../assets/images/me.jpg",
        title: 'Breakfast',
      }
    ]
  )

  return (
    <Grid container>
      <Grid xs={12}>
        <Typography variant="h4">About Me</Typography>
      </Grid>
      <Grid xs={6}>
        <img
          src={me}
          alt="me"
          style={{
            borderRadius: "50%",
            width: 250,
            height: 250
          }}
        />
      </Grid>
      <Grid xs={6} sx={{ margin: "auto", padding: "0px 30px" }}>
        <Typography variant="body1">
          Hi, my name is Austin Fullwood and I'm a Software Engineer.
          I graduated to Virginia Tech in 2021 and am currently working at
          Bluesight for the Platform team.
          <br/>
          <br/>
          In my free time, I love to travel,
          do any activity outside (snowboard, surf, hike, etc.), and do various
          side projects.
        </Typography>
      </Grid>
      <Grid xs={12}>
        <Typography variant="h4">Hobbies</Typography>
      </Grid>
    </Grid>
  );
}

export default About;
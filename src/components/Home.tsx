import { Typography } from "@mui/material";
import Me from "../assets/images/me.jpg";
import DrawingMe from "../assets/images/drawing_me.png";

function About() {
  const bulletHeader = {
    display: "inline-block",
    width: "95px"
  };

  return (
    <div style={{display: "flex", flexWrap: "wrap", margin: "30px 0px"}}>
      <div style={{
        width: "50%",
        margin: "auto",
        minWidth: "310px",
        position: "relative",
        top: 0,
        left: 0
      }}>
        <img
          src={Me}
          alt="Me"
          style={{
            borderRadius: "50%",
            width: "100%",
            height: "auto",
            maxWidth: "500px"
          }}
        />
        <img
          src={DrawingMe}
          alt="DrawingMe"
          style={{
            width: "30%",
            height: "auto",
            position: "absolute",
            top: 10,
            left: 10
          }}
        />
      </div>
      <div style={{
        width: "50%",
        margin: "auto",
        padding: "0px 30px",
        textAlign: "left",
        minWidth: "310px"
      }}>
        <div style={{ margin: "25px 0px"}}>
          <Typography variant="h4">
            Sup my dude! Thanks for swinging by!
          </Typography>
          <Typography variant="body1">
            Website is currently (well kinda always) in progress, but enjoy the current iteration. <br/>
            Also, feel free to hit me up using one of the links at the bottom.
          </Typography>
        </div>
        <div style={{ margin: "25px 0px"}}>
          <Typography variant="h4">
            Me In Bullet Points
          </Typography>
          <Typography variant="body1" >
            <b style={bulletHeader}>Job:</b> Software Engineer At Bluesight (Platform Team)<br/>
            <b style={bulletHeader}>School:</b> Virginia Tech (Class 2021)<br/>
            <b style={bulletHeader}>Hometown:</b> Virginia Beach, VA<br/>
            <b style={bulletHeader}>Hobbies:</b> Traveling, Surfing, Snowboarding, Video Games
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;

    // <Grid container>
    //   <Grid xs={6} sx={{
    //     position: "relative",
    //     top: 0,
    //     left: 0
    //   }}>
    //     <img
    //       src={Me}
    //       alt="Me"
    //       style={{
    //         margin: 15,
    //         borderRadius: "50%",
    //         width: 500,
    //         height: 500,
    //         borderWidth: "2px",
    //         position: "relative",
    //         top: 0,
    //         left: 0
    //       }}
    //     />
    //     <img
    //       src={DrawingMe}
    //       alt="DrawingMe"
    //       style={{
    //         width: "30%",
    //         height: "30%",
    //         position: "absolute",
    //         top: 10,
    //         left: 10
    //       }}
    //     />
    //   </Grid>
    //   <Grid xs={6} sx={{ margin: "auto", padding: "0px 30px", textAlign: "left" }}>
    //     <div style={{ margin: "25px 0px"}}>
    //       <Typography variant="h4">
    //         Sup my dude! Thanks for swinging by!
    //       </Typography>
    //       <Typography variant="body1">
    //         Website is currently (well kinda always) in progress, but enjoy the current iteration. Also, feel free
    //         to hit me up using one of the links at the bottom.
    //       </Typography>
    //     </div>
    //     <div style={{ margin: "25px 0px"}}>
    //       <Typography variant="h4">
    //         Me In Bullet Points
    //       </Typography>
    //       <Typography variant="body1" >
    //       <ul style={{listStyle: "none", display: "table", padding: 0}}>
    //         <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>Job:</b>Software Engineer At Bluesight (Platform Team)</li>
    //         <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>School:</b>Virginia Tech (Class of 2021)</li>
    //         <li style={{display: "table-row"}}><b style={{display: "table-cell"}}>Hometown:</b>Virginia Beach, VA</li>
    //         <li style={{display: "table-row"}}>
    //           <b>Hobbies:</b>
    //           <ul style={{}}>
    //             <li style={{}}>Traveling</li>
    //             <li style={{}}>Surfing</li>
    //             <li style={{}}>Snowboarding</li>
    //             <li style={{}}>Video Games</li>
    //           </ul>
    //         </li>
    //       </ul>
    //       </Typography>
    //     </div>
    //   </Grid>
    // </Grid>
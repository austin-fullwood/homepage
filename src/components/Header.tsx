import { AppBar, Button, Typography } from "@mui/material"
import { Link, redirect, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div style={{  backgroundColor: "#ED553B", padding: "60px 0px" }}>
        <Typography variant="h1">
          Austin Fullwood Homepage
        </Typography>
        <Typography variant="h6">
          Because I'm Currently Homeless
        </Typography>
      </div>
      <AppBar position="static" style={{ backgroundColor: "white"}}>
          <div>
            {
              ["Home", "Projects", "Travel", "Status", "Resume", "Contact Me", "Login"].map((name) => (
                // <Link to={`/${name.toLowerCase()}`} style={{textDecoration: "none", margin: "0px 20px", color: "black"}}>
                //   {name}
                //   </Link>
                <Button variant="text" sx={{ margin: "0px 20px" }} onClick={() => { navigate(`/${name.toLowerCase().replace(" ", "-")}`) }}>{name}</Button>
              ))
            }
          </div>
      </AppBar>
    </>
  );
}

export default Header;
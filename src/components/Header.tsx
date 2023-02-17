import { AppBar, Button, Toolbar, Typography } from "@mui/material"

function Header() {
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
              ["Home", "About", "Projects", "Travel", "Status", "Resume", "Contact Me", "Login"].map((name) => (
                <Button variant="text" sx={{ margin: "0px 20px" }}>{name}</Button>
              ))
            }
          </div>
      </AppBar>
    </>
  );
}

export default Header;
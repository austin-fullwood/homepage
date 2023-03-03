import { AppBar, Link, Typography } from "@mui/material"

function Header() {
  return (
    <AppBar position="static" style={{  backgroundColor: "#ED553B" }}>
      <div style={{margin: "0px 10%"}}>
        <div style={{margin: "50px 0px"}}>
          <Typography variant="h1">
            Austin Fullwood Homepage
          </Typography>
          <Typography variant="h6">
            Because I'm Currently Homeless
          </Typography>
        </div>
        <div style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "10px 0px"
          }}
        >
          {
            ["Home", "Projects", "Resume"].map((name) => ( // "Contact Me", "Login", "Travel", "Status",
              <Typography variant="h5">
                <Link underline="none" href={`/${name.toLowerCase().replace(" ", "-")}`} sx={{color: "white", '&:hover': { color: "#3CAEA3" }}}>
                  {name}
                </Link>
              </Typography>
            ))
          }
        </div>
      </div>
    </AppBar>
  );
}

export default Header;
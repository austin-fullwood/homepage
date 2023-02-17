import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { useState } from "react";
import { AUTH_USER_TOKEN_KEY } from "../utils/constants";

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function LoginButton() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    console.log("logging in");
    Auth.signIn(email, password)
          .then(user => {
            console.log(user);
            // const { history, location } = this.props;
            // const { from } = location.state || {
            //   from: {
            //     pathname: '/dashboard'
            //   }
            // };

            localStorage.setItem(AUTH_USER_TOKEN_KEY, user.signInUserSession.accessToken.jwtToken);

            console.log(user.signInUserSession.accessToken.jwtToken);

            // history.push(from);
          })
          .catch(err => {
            console.log(err);
          });
  }

  return (
    <>
      <Button onClick={() => { setOpen(!open) }}>Admin</Button>
      <Modal
        open={open}
        onClose={() => { setOpen(false) }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Login
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <Button onClick={() => { login() }}>Login</Button>
          </Typography>
        </Box>
      </Modal>
    </>
  );
}

export default LoginButton;

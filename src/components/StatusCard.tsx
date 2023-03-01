import { Divider, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Fragment } from 'react';
import { StatusUpdate } from '../utils/types';

function StatusCard(props: { statusUpdate: StatusUpdate }) {
  return (
    <>
      <h1>Status</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </Fragment>
          }
        />
      </ListItem>
    </List>
    </>
  );
}

{/* <Card sx={{ minWidth: 275, backgroundColor: "#F6D55C" }}>
<CardContent>
  <Typography variant="h5" component="div">
    January 31st, 2023
  </Typography>
  <Typography variant="body1">
    Status: &#127968;&#10060; (Homeless)
  </Typography>
  <Typography variant="body2">
    Officially moved out of my apartment in Arlington, VA today, so if you need me, I'll be living at home. #killingit
  </Typography>
</CardContent>
</Card> */}

export default StatusCard;

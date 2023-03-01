import { Typography } from "@mui/material";
import { StatusUpdate } from "../utils/types";
import StatusCard from "./StatusCard";

function Status() {
  const statusUpdates: StatusUpdate[] = [
    {
      title: "Pizza",
      date: new Date(Date.now()),
      location: "Virginia Beach, VA",
      update: "Fucking killing it"
    }
  ]
  return (
    <>
      <Typography variant="h4">Status Updates</Typography>
      {
        statusUpdates.map((statusUpdate: StatusUpdate) => (
          <StatusCard statusUpdate={statusUpdate} />
        ))
      }
    </>
  );
}

export default Status;
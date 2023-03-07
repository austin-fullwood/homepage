import { Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

function Travel() {
  const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

  return (
    <>
      <Typography variant="h4">Travel</Typography>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
      </ComposableMap>
    </>
  );
}

export default Travel;
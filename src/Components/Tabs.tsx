import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    console.log(event);
  };

  return (
    <div className="bg-home-bg">
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab className="text-white font-bold" label="Cart" />
          <Tab className="text-white font-bold" label="Mall" />
          <Tab className="text-white font-bold" label="Live" />
        </Tabs>
      </Box>
    </div>
  );
}

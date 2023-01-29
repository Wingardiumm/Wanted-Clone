import React, { useState } from "react";
import { Box, Tabs, Tab, Button, Container, tabsClasses } from "@mui/material";
import mainTabData from "../../../data/mainTabData";
import styled from "styled-components";

const StyledTab = styled(Tab)`
  display: -ms-flexbox !important;
  display: flex !important;
  padding: 9px 22px !important;
  font-weight: 600 !important;
  font-size: 15px !important;
  line-height: 146.7% !important;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  color: #888 !important;
  border: 1px solid;
  border-radius: 25px;
  border-color: #ececec !important;
  outline: none;
  scroll-snap-align: start;
  height: 40px !important;
  position: relative !important;
`;

function MainScrollableTab() {
  const [value, setValue] = useState(0);
  const style = "";
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexGrow: 1,
          px: { xs: 0, md: 2 },
          alignItems: "center",
          mt: 2,
          mb: 2,
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          sx={{
            [`& .${tabsClasses.scrollButtons}`]: {
              "&.Mui-disabled": { opacity: 0 },
            },
            "& button:active": { borderColor: "#36f" },
            "& button:hover": { backgroundColor: "#ececec" },
          }}
        >
          {mainTabData.map((tab) => (
            <Tab
              sx={{
                border: "1px solid",
                display: "flex!important",
                padding: "9px 22px!important",
                fontWeight: "600!important",
                fontSize: "15px!important",
                lineHeight: "146.7%!important",
                ["-ms-flex-negative"]: 0,
                flexShrink: 0,
                color: "#888!important",
                borderColor: "#ececec!important",
                outline: "none",
                scrollSnapAlign: "start",
                height: "40px!important",
                position: "relative!important",
                borderRadius: "25px",
                backgroundColor: "#fff",
                // "span": {
                //   width: "100%",
                //   fontSize: "inherit",
                //   fontWeight: "inherit",
                //   display: "inherit",
                //   alignItems: "inherit",
                //   justifyContent: "inherit",
                //   color: "inherit",
                // },
              }}
              key={tab.id}
              label={tab.name}
            ></Tab>
          ))}
        </Tabs>
      </Box>
    </Container>
  );
}

export default MainScrollableTab;

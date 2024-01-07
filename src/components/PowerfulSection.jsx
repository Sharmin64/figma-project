import { Box, Container, Typography } from "@mui/material";
import React from "react";
import fastImg from "../assets/undraw_social_influencer_sgsv.jpg";

const PowerfulSection = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "10em", display: "flex" }}>
      <Box
        sx={{
          bgcolor: "#fffff",
          height: "30vh",
          width: "50vw",
        }}
      >
        <img src={fastImg} alt="image" />
      </Box>
      <Box
        sx={{
          bgcolor: "#fffff",
          height: "30vh",
          width: "50vw",
          paddingTop: "5em",
        }}
      >
        <Typography variant="h6">Light , Fast and Powerful.</Typography>
        <Typography variant="p" color={"#6F7CB2"}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </Typography>
      </Box>
    </Container>
  );
};

export default PowerfulSection;

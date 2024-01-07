import { Box, Container, Typography } from "@mui/material";
import fastImg from "../assets/flowerWomen.jpg";
import React from "react";

const FastSection = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "8em", display: "flex" }}>
      <Box
        sx={{
          bgcolor: "#fffff",
          height: "30vh",
          width: "50vw",
        }}
      >
        <img src={fastImg} alt="" />
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

export default FastSection;

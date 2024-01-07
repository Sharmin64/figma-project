import { Box, Button, Container, Stack, Typography } from "@mui/material";
import groupImg from "../assets/Group.jpg";

import React from "react";

const Product = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "20px", display: "flex" }}>
      <Box
        sx={{
          bgcolor: "#fffff",
          height: "30vh",
          width: "50vw",
          paddingTop: "12em",
        }}
      >
        <Typography variant="h4">
          Introduce Your Product Quickly & Effectively
        </Typography>
        <Typography
          variant="p"
          color={"#6F7CB2"}
          sx={{ wordBreak: "break-word", width: "12px" }}
        >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim.
        </Typography>
        <Stack spacing={2} direction="row" marginTop={"20px"}>
          <Button sx={{ bgcolor: "#111B47" }} variant="contained">
            Purchase UI Kit
          </Button>
          <Button sx={{ borderColor: "#111B47" }} variant="outlined">
            Learn More
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: "50vw" }}>
        <img src={groupImg} width={600} alt="group" />
      </Box>
    </Container>
  );
};

export default Product;

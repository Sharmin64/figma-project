import { Box, Container, Typography } from "@mui/material";
import groupImg from "../assets/Group.jpg";

import React from "react";

const Product = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "20px", display: "flex" }}>
        <Box sx={{ bgcolor: "#fffff", height: "40vh" }}>
          <Typography variant="h4">
            Introduce Your Product Quickly & Effectively
          </Typography>
        </Box>
        <Box>
          <img src={groupImg} width={400} alt="group" />
        </Box>
      </Container>
    </div>
  );
};

export default Product;

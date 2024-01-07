import { Box, Container, Typography } from "@mui/material";
import footerImg from "../assets/Rectangle.png";

const Footer = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: "10em", position: "relative" }}>
      <Box sx={{ position: "relative" }}>
        <img src={footerImg} alt="footer" />
        <Typography
          sx={{
            position: "absolute",
            zIndex: "tooltip",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h5"
        >
          A Price To Suit Everyone
        </Typography>
      </Box>
    </Container>
  );
};

export default Footer;

import { Box, Container, Icon, Stack, Typography } from "@mui/material";
import groupImg from "../assets/mobile-login.jpg";
import EditNotificationsIcon from "@mui/icons-material/EditNotifications";

const LightSection = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ marginTop: "10em", display: "flex" }}>
        <Box
          sx={{
            bgcolor: "#fffff",
            height: "30vh",
            width: "50vw",
            paddingBottom: "8em",
          }}
        >
          <Typography variant="h5">Light , Fast and Powerful.</Typography>
          <Typography variant="p">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </Typography>
          <Box sx={{ paddingTop: "5em", display: "flex" }}>
            <Stack>
              <EditNotificationsIcon />
              <Typography variant="h6">Title goes here </Typography>
              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                porro
              </Typography>
            </Stack>
            <Stack>
              <EditNotificationsIcon />
              <Typography variant="h6">Title goes here.</Typography>
              <Typography variant="p">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                porro
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ width: "50vw" }}>
          <img src={groupImg} width={600} alt="group" />
        </Box>
      </Container>
    </div>
  );
};

export default LightSection;

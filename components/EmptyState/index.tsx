import { Box, Typography } from "@mui/material";
import Image from "next/image";
import LandingListingSvg from "../../public/static/images/landing-listing.svg";
const EmptyState = () => {
  return (
    <Box
      bgcolor={"background.paper"}
      m={"auto"}
      width={"100%"}
      borderRadius={"borderRadius"}
      padding={"1rem"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
    >
      <Image src={LandingListingSvg} />
      <Typography variant={"caption"} color={"textSecondary"}>
        Text about empty listing
      </Typography>
    </Box>
  );
};

export default EmptyState;

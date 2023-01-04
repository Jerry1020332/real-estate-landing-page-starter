import { Box, Container, styled, Typography } from "@mui/material";
import React from "react";
import Img from "../media/Group.svg";
import logoImg from "../media/logo.png";
import starsImg from "../media/Star.png";
import logosImg from "../media/logos.png";

const Companies = () => {
  const CustomContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.dowm("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      marginBottom: theme.spacing(4),
    },
  }));

  const CustomBox = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(4),
    },
  }));

  return <Box sx={{mt:10}} >
    <CustomContainer>
      <CustomBox>
        <img src={Img} alt="pic" style={{ maxWidth: "100%"}} />
        <Typography variant="body2" sx={{color: "#7D8595", fontSize: "16px", fontWeight: "bold", mt:2}}>
          More than 45,000 trust JerryFriends
        </Typography>
      </CustomBox>

    </CustomContainer>
  </Box>;
};

export default Companies;

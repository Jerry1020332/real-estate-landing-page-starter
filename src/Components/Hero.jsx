import { Box, Button, styled, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Navbar from "./Navbar";

import heroImg from "../media/hero_illustration.png";
import CustomButton from "./CustomButton";

const Hero = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex" ,
    justifyContent: "center" ,
    gap: theme.spacing(5) ,
    marginTop: theme.spacing(3) ,
    [theme.breakpoints.down("md")]: {
      flexDirection: "column" ,
      alignItems: "center" ,
      textAlign: "center" ,
    }
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "64px" ,
    color: "#000336" ,
    fontWeight: "bold" ,
    margin: theme.spacing(4,0,4,0) ,
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px" ,
    },
  }));

  return ( 
    <Box sx={{backgroundColor: "#F3F3F3" , minheight: "280vh"}}>
      <Container>
        <Navbar />
        <CustomBox>
          <Box sx={{flex: "1"}}>
            <Typography 
              variant= "body2" 
              sx={{
                fontSize: "32px" ,
                color: "1e1e1e" ,
                fontWeight: "800",
                mt:10,
                mb:0,
              }}
            >
              做專案、組團隊、拓展人脈，
            </Typography>
            <Typography 
              variant= "body2" 
              sx={{
                fontSize: "32px" ,
                color: "1e1e1e" ,
                fontWeight: "800",
                mt:0,
                mb:3,
              }}
            >
              都在這裡
            </Typography>
            <Typography 
              variant= "body2" 
              sx={{
                fontSize: "16px" ,
                color: "5A6473" ,
                fontWeight: "600",
                mt:0,
                mb:4,
              }}
            >
              從計畫到執行，跨越領域和校系
            </Typography>
            <CustomButton 
              backgroundColor= "#F5C520" 
              color= "#000" 
              buttonText= '馬上加入'
              heroBtn={true}
            />
          </Box>
        </CustomBox>
      </Container>
    </Box>
  );
};

export default Hero;

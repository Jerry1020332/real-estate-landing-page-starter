import { Button, styled } from "@mui/material";
import { width } from "@mui/system";
import React from "react";

const CustomButton = ({
  backgroundColor, 
  color, 
  buttonText, 
  heroBtn, 
  guideBtn, 
  getStartedBtn
}) => {
  const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: "#F5C520",
    color: "#1e1e1e",
    fontWeight: "700",
    fontSize: "14px",
    cursor: "pointer",
    padding: "0.25rem 3rem",
    borderRadius: "7px",
    marginRight: "-150px",
    textTransform: "none",
    display: "block",
    border: "2px solid transparent",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#000",
      borderColor: "#000"
    },
    [theme.breakpoints.down("md")]:{
      margin: (heroBtn || getStartedBtn) && theme.spacing(3),
      width: (heroBtn || getStartedBtn) &&"90%" ,
    },
    [theme.breakpoints.down("sm")]:{
      marginTop: guideBtn && theme.spacing(0, "auto", 3, "auto"),
      width: guideBtn &&"90%" ,
    },
  }));

  return <CustomButton>{buttonText}</CustomButton>;
};

export default CustomButton;

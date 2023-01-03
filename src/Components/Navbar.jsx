import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ListAltIcon from "@mui/icons-material/ListAlt";
import HomeIcon from "@mui/icons-material/Home";
import ContactsIcon from "@mui/icons-material/Contacts";
import logoImg from "../media/logo.png";
import { Container } from "@mui/system";
import CustomButton from "./CustomButton";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const NavLink = styled(Typography)(({ theme }) => ({
    fontSize: "14px",
    color: "#fff",
    cursor: "pointer",
    "&:hover": {
      color: "#000",
    },
  }));

  const NavbarLinksBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: theme.spacing(3),
    [theme.breakpoints.dom("md")]: {
      display: "none",
    }
  }));

  const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
    cursor: "pointer",
    display: "none",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("md")]:{
      display: "block",
    },
  }));

  const NavbarContainer = styled(Container)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(5),
    [theme.breakpoints.dom("md")]:{
      padding: theme.spacing(2),
    },
  }));

  const NavbarLogo = styled("img")(({ theme }) => ({
    cursor: "pointer",
    [theme.breakpoints.down("md")]:{
      display: "none",
    },
  }));

  return (
  <NavbarContainer>
    <Box 
      sx={{
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center",
        gap: "2.5rem"
      }}
    >
      <Box sx={{display: "flex", alignItems: "center"}}>
        <CustomMenuIcon />
        <NavbarLogo src={logoImg} alt="logo"/>
      </Box>
    </Box>
  </NavbarContainer>
  );
};

export default Navbar;

import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./signup.module.css";

import { text } from "@fortawesome/fontawesome-svg-core";



const drawerWidth = 240;

function Navbar1(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const navigate = useNavigate();
  const navItems = [
    { text: "Home", link: "/" },
    // {text:"Blogs", link: "http://localhost:3001/", external:true},
,    { text: "About", link: "/about" },
    { text: "Contact", link: "/contact" },
     { text: "Login", link: "/login" },
  ];

  const handleclickk = (k) => {
    console.log(k);
    navigate(k);
  };


  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        DAMS
      </Typography>
      <Divider />
      <List>
     
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemText
                primary={item.text}
                onClick={() => {
                  handleclickk(item.link);
                }}
                sx={{ textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar component="nav" sx={{
          position: 'relative',
          backgroundImage: "url('path/to/your/image.jpg')",
          backgroundSize: 'cover',
          transition: 'backdrop-filter 0.3s ease',
          padding: '5px',
          backdropFilter: 'blur(10px)',
          backgroundColor: '#6e47b8', /* Adjust opacity as needed */
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 6px 20px 0 rgba(0, 0, 0, 0.4)',

          //  borderRadius:'16px',
        }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            {/* <AccountCircleIcon></AccountCircleIcon> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 0 }}>
            Department Achievement Management System
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {/* {navItems.map((item) => (
                <Button
                  key={item.text}
                  sx={{ color: "#fff" }}
                  onClick={() => {
                    navigate(item.link);
                    console.log("clicked");
                  }}
                >
                  {item.text}
                </Button>
              ))} */}
             <Box component="nav" sx={{ display: "flex", gap: 2, alignItems: "center" }}>
  {navItems.map((item) => {
    const isExternal = /^https?:\/\//.test(item.link); // Checks if link starts with http or https

    return (
      <ListItem key={item.text} sx={{ display: "inline-flex", width: "auto", padding: 0 }}>
        {isExternal ? (
          // If it's an external link, use <a>
          <ListItemButton 
            component="a" 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            sx={{ textAlign: "center", padding: "8px 16px" }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        ) : (
          // If it's an internal link, use onClick
          <ListItemButton 
            onClick={() => handleclickk(item.link)}
            sx={{ textAlign: "center", padding: "8px 16px" }}
          >
            <ListItemText primary={item.text} />
          </ListItemButton>
        )}
      </ListItem>
    );
  })}
</Box>
            </Box>
          </Toolbar>
        </AppBar>
        <nav >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                bgcolor:'linear-gradient(to right, #6e47b8, #1a0b40)',
              
              },

            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    </div>
  );
}

export default Navbar1;

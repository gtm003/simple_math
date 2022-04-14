import classNames from "classnames";
import React from "react";
import { NavLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { Typography } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import logo from "../../../assets/images/logo.svg";
import styles from "./Header.module.scss";

const pages = [
  { name: "Home", path: "/" },
  { name: "Geometry", path: "/Geometry" },
  { name: "Charts", path: "/Charts" },
  { name: "Games", path: "/Games" },
];

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const currentLocation = window.location.pathname;
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" className={styles.header}>
      <Container >
        <Toolbar disableGutters>
          <img src={logo} className={styles.logo} alt="logo" />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            className={styles.title}
          >
            SIMPLE MATH
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <NavLink
                  end
                  to={page.path}
                  key={`${page.name}`}
                  className={classNames({
                    [styles.link]: true,
                    [styles.active]: currentLocation === page.path,
                  })}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </NavLink>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            SIMPLE MATH
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <NavLink
                end
                to={page.path}
                key={`${page.name}`}
                className={classNames({
                  [styles.link]: true,
                  [styles.active]: currentLocation === page.path,
                })}
              >
                <Typography textAlign="center">{page.name}</Typography>
              </NavLink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

import { makeStyles, useTheme } from "@mui/styles";
import Image from "next/image";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Grow,
  IconButton,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Theme,
  Toolbar,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect } from "react";
import Link from "next/link";
import logSvg from "../../public/static/images/logo.svg";
import sebudaLogoSvg from "../../public/static/images/sebudaLogo.svg";
import { CustomButton } from "../kit/Button";

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    background: "#828b99",
    zIndex: 2,
  },

  toolBar: {
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    "& p:first-child": {
      marginLeft: "1vmax",
    },
    "& p:not(:first-child)": {
      marginLeft: "1vmax",
    },
  },
  regularToolbar: {
    minHeight: "6rem",
    background: "#828b99",
  },
  containerRoot: {
    maxWidth: 1440,
    padding: 0,
  },
  iconDropdown: {
    color: theme.palette.common.white,
  },
  link: {
    color: theme.palette.common.white,
    [theme.breakpoints.down("sm")]: {
      color: theme.palette.common.white,
    },
    display: "block",
  },

  largeAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: "3px solid",
    borderColor: theme.palette.common.white,
  },
  itemTextMenu: {
    fontSize: "13px",
    fontWeight: 400,
    marginRight: "15px",
    cursor: "pointer",
    color: "white",
  },
}));

const Header = () => {
  const classes = useStyles();
  const isAuthenticated = true;
  const theme = useTheme<Theme>();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar
      color={"transparent"}
      elevation={0}
      position="fixed"
      classes={{ root: classes.appBar }}
    >
      <Toolbar
        classes={{ root: classes.toolBar, regular: classes.regularToolbar }}
      >
        <Box className={classes.title}>
          <Link href="/">
            <Box display={"flex"} alignItems={"center"}>
              <Box component={"span"} mr={"1rem"}>
                <Image src={logSvg} />
              </Box>
              <Image src={sebudaLogoSvg} />
            </Box>
          </Link>
          {isAuthenticated ? (
            <Box
              display="flex"
              alignItems="center"
              height="100%"
              flexWrap="wrap"
              minHeight="4rem"
              marginLeft="8px"
            >
              <Typography
                className={classes.itemTextMenu}
                // onClick={() => history.push(paths.sell)}
              >
                Sell
              </Typography>
              <Typography
                className={classes.itemTextMenu}
                // onClick={() => history.push("/listing")}
              >
                Buy
              </Typography>
              <Typography
                className={classes.itemTextMenu}
                // onClick={() => history.push(paths.blog)}
              >
                Education
              </Typography>
              <Badge badgeContent={10} color="error">
                <Typography
                  className={classes.itemTextMenu}
                  //   onClick={() => history.push(paths.panelListing)}
                >
                  My Listing
                </Typography>
              </Badge>
              <Typography
                className={classes.itemTextMenu}
                //   onClick={() => {
                //     handleClickOpen(paths.listingAdd);
                //   }}
              >
                + Add new Page
              </Typography>
              <Typography
                className={classes.itemTextMenu}
                //   onClick={() => {
                //     handleClickOpen(paths.listingAddUniq);
                //   }}
              >
                + Add Special Name Page
              </Typography>
              <Badge badgeContent={10} color="error">
                <Typography
                  className={classes.itemTextMenu}
                  //   onClick={() => history.push(paths.panelEscrows)}
                >
                  My Escrow
                </Typography>
              </Badge>
            </Box>
          ) : (
            <>
              <Typography className={classes.itemTextMenu}>Sell</Typography>
              <Typography className={classes.itemTextMenu}>Buy</Typography>
              <Typography className={classes.itemTextMenu}>
                Education
              </Typography>
            </>
          )}
        </Box>
        {!isAuthenticated ? (
          <>
            <CustomButton
              variant="outlined"
              color="primary"
              style={{
                width: "50px",
                borderRadius: "8px",
                marginRight: "16px",
                height: "46px",
                fontSize: "13px",
              }}
              // onClick={(e) => {
              //   handleClose(e);
              //   history.push(paths.signin);
              // }}
            >
              Login
            </CustomButton>
            <Button
              variant="contained"
              color="primary"
              style={{
                width: "90px",
                borderRadius: "8px",
                height: "46px",
                fontSize: "13px",
              }}
              onClick={(e) => {
                //   handleClose(e);
                //   history.push(paths.signup);
              }}
            >
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Box mr={"1rem"}>{/* <Notifications /> */}</Box>

            <Tooltip placement="left" title={<Typography>test</Typography>}>
              <IconButton
                ref={anchorRef}
                aria-controls={open ? "menu-list-grow" : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                className={classes.iconDropdown}
                size={"small"}
                color={"primary"}
              >
                <Avatar
                  className={classes.largeAvatar}
                  alt="Remy Sharp"
                  // src={`${baseURL}/${profileData.avatar}`}
                />
              </IconButton>
            </Tooltip>
          </>
        )}
        <ClickAwayListener
          //@ts-ignore
          onClickAway={handleClose}
          children={
            <Popper
              style={{ zIndex: 1 }}
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Box component={Paper} style={{ borderRadius: "8px" }}>
                    <MenuList
                      autoFocusItem={open}
                      id="menu-list-grow"
                      onKeyDown={handleListKeyDown}
                    >
                      {isXs && (

                        <>
                          {isAuthenticated && (
                            <MenuItem
                              onClick={(e) => {
                                handleClose(e);
                              }}
                            >
                              <Link href="/">My List</Link>
                            </MenuItem>
                          )}
                        </>
                      )}
                      {isAuthenticated ? (
                        <MenuItem
                          onClick={(e) => {
                            handleClose(e);
                            // history.push(paths.profile);
                          }}
                        >
                          Profile
                        </MenuItem>
                      ) : (
                        <>
                          <MenuItem
                            onClick={(e) => {
                              handleClose(e);
                              // history.push(paths.signin);
                            }}
                          >
                            Login
                          </MenuItem>
                          <MenuItem
                            onClick={(e) => {
                              handleClose(e);
                              // history.push(paths.signup);
                            }}
                          >
                            Sign Up
                          </MenuItem>
                        </>
                      )}

                      {isAuthenticated && (
                        <MenuItem
                          onClick={(e) => {
                            handleClose(e);
                            localStorage.clear();
                            window.location.reload();
                          }}
                        >
                          Log out
                        </MenuItem>
                      )}
                    </MenuList>
                  </Box>
                </Grow>
              )}
            </Popper>
          }
        ></ClickAwayListener>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

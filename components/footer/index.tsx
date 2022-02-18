import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@mui/styles";
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
} from "@mui/material";
import tiktokIcon from "../../public/static/images/tiktok.png";
import bannerImage from "../../public/static/Banner-image.jpg";
import {
  Twitter,
  Instagram,
  Facebook,
  Pinterest,
  Telegram,
  YouTube,
  LinkedIn,
} from "@mui/icons-material";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme: Theme) => ({
  boxBannerOne: {
    display: "flex",
    ["@media (max-width:768px)"]: {
      display: "block",
    },
  },
  bannerLandingOneLeft: {
    backgroundPosition: "center",
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "400px",
    borderRadius: "16px 0px 0px 16px",
    width: "50%",
    ["@media (max-width:768px)"]: {
      width: "100%",
      borderRadius: "16px 16px 0px 0px",
      height: "250px",
    },
  },
  bannerLandingOneRight: {
    height: "400px",
    display: "flex",
    flexDirection: "column",
    width: "50%",
    background: "#828B99",
    justifyContent: "center",
    paddingLeft: "40px",
    paddingRight: "40px",
    borderRadius: "0px 16px 16px 0px",
    ["@media (max-width:768px)"]: {
      width: "100%",
      height: "300px",
      borderRadius: "0px 0px 16px 16px",
    },
    ["@media (max-width:450px)"]: {
      width: "100%",
      height: "400px",
      borderRadius: "0px 0px 16px 16px",
    },
  },

  boxBannerThree: {
    maxWidth: "1358px",
    width: "100%",
    margin: "100px 16px 0px",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    marginBottom: "100px",
    ["@media (max-width:768px)"]: {
      margin: "50px 16px 100px",
    },
  },
  heroContainer: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    padding: "16px",
  },
  heroContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "0px",
    width: 412,
    height: 528,
  },
  heroContentSebuda: {
    fontWeight: "bold",
    fontSize: 65,
    lineHeight: "76px",
  },
  heroContentSebudaWhiteText: {
    fontWeight: "bold",
    fontSize: 65,
    lineHeight: "76px",
    color: "white",
    marginLeft: "8px",
  },
  heroContentDescription: {
    fontSize: "14px",
    lineHeight: "23px",
    margin: "2.875rem 0",
    maxWidth: "412px",
  },
  heroContentCtaSubtitle: {
    marginTop: "3.31rem",
    maxWidth: 268,
    display: "flex",
    justifyContent: "space-between",
  },
  features: {
    display: "flex",
    // justifyContent: 'space-between',
    position: "relative",
  },
  featureIconWrapper: {
    width: "48px",
    height: "48px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    background: theme.palette.primary.main,
    borderRadius: "6px",
    marginBottom: "1.25rem",
  },
  listingCta: {
    width: "100%",
    height: 122,
    background: theme.palette.primary.main,
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "26px",
  },
  boxCards: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    marginTop: "32px",
    ["@media (max-width:768px)"]: {
      justifyContent: "center",
    },
  },
  boxCard: {
    width: "352px",
    height: "332px",
    background: "white",
    boxShadow:
      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)",
    borderRadius: "16px",
    position: "relative",
    marginTop: "48px",
  },
  cardIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    position: "absolute",
    width: "64px",
    height: "64px",
    left: "24px",
    top: "-32px",
    background: "#FCD535",
    borderRadius: "12px",
  },
  titleBannerThree: {
    fontWeight: 800,
    fontSize: "60px",
    color: "white",
    ["@media (max-width:524px)"]: {
      fontSize: "42px",
    },
  },
  boxFooter: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 16px",
    flexWrap: "wrap",
  },
  textItemFooter: {
    fontSize: "14px",
    fontWeight: 400,
    color: "white",
    marginTop: "16px",
    cursor: "pointer",
  },
}));

interface IFooter {
  handleSubmitChatAdmin: any;
}

const Footer: React.FC<IFooter> = (props) => {
  const classes = useStyles();
  const baseURL = "https://sebuda.com";

  return (
    <Box width="100%" minHeight="382px" bgcolor="#828B99" id="test">
      <Container disableGutters maxWidth={"lg"} className={classes.boxFooter}>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="350px"
          marginTop="45px"
          marginRight="16px"
        >
          <Typography
            style={{ fontSize: "50px", fontWeight: 400, color: "white" }}
          >
            Sebuda
          </Typography>
          <Typography
            style={{
              fontSize: "16px",
              fontWeight: 400,
              color: "white",
              marginTop: "32px",
            }}
          >
            Be with us On Social Networks
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            width="140px"
            marginTop="20px"
          >
            <Box display="flex" justifyContent="space-between" width="200px">
              <a
                href="https://facebook.com/sebudacom"
                style={{ margin: "10px 10px 0px" }}
              >
                <Facebook style={{ color: "white" }} />
              </a>
              <a
                href="https://www.instagram.com/sebudacom/"
                style={{ margin: "10px 10px 0px" }}
              >
                <Instagram style={{ color: "white" }} />
              </a>
              <a
                href="https://t.me/s/sebudacom"
                style={{ margin: "10px 10px 0px" }}
              >
                <Telegram style={{ color: "white" }} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCX3jg_Fyrh0ABDsQnI24d8A"
                style={{ margin: "10px 10px 0px" }}
              >
                <YouTube style={{ color: "white" }} />
              </a>
              <a
                href="https://twitter.com/sebudacom"
                style={{ margin: "10px 10px 0px" }}
              >
                <Twitter style={{ color: "white" }} />
              </a>
              <a
                href="https://pinterest.com/sebudacom"
                style={{ margin: "10px 10px 0px" }}
              >
                <Pinterest style={{ color: "white" }} />
              </a>
              <a
                href="https://www.linkedin.com/in/sebudacom/"
                style={{ margin: "10px 10px 0px" }}
              >
                <LinkedIn style={{ color: "white" }} />
              </a>
              <a
                href="https://www.tiktok.com/@sebuda.com"
                style={{ margin: "10px 10px 0px" }}
              >
                <Image
                  src={tiktokIcon}
                  width="23px"
                  height="23px"
                  layout="fixed"
                />
              </a>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="300px"
          marginTop="45px"
          marginRight="16px"
        >
          <Box style={{ fontSize: "14px", fontWeight: 600, color: "white" }}>
            FAQ
          </Box>

          <Box
            className={classes.textItemFooter}
            onClick={() => {
              window.open(
                `${baseURL}/education/61bd92c0379aab3049ebb585?id=61b0ae9350a2347d065f2e7f`
              );
            }}
          >
            How can I buy?
          </Box>
          <Box
            className={classes.textItemFooter}
            onClick={() => {
              window.open(
                `${baseURL}/education/61bc3aac379aab7c8dea950d?id=61b0afec50a2348e255f2ed9`
              );
            }}
          >
            How can I sell?
          </Box>
          <Box className={classes.textItemFooter}>Recently Sold</Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="300px"
          marginTop="45px"
          marginRight="16px"
        >
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              // history.push(paths.listing);
            }}
          >
            Especial Pages
          </Typography>
          <Box
            onClick={() => {
              // dispatch(push({ pathname: '/listing', search: '?uniq=true' }));
            }}
            className={classes.textItemFooter}
          >
            Special names list
          </Box>
          <Box
            className={classes.textItemFooter}
            onClick={() => {
              window.open(
                `${baseURL}/education/61bf5574bf71ce48722e3250?id=61b0ae9350a2347d065f2e7f`
              );
            }}
          >
            Rules for buyer
          </Box>
          <Box
            onClick={() => {
              window.open(
                `${baseURL}/education/61be300abf71ce006425234d?id=61b0afec50a2348e255f2ed9`
              );
            }}
            className={classes.textItemFooter}
          >
            Rules for seller
          </Box>
          <Box className={classes.textItemFooter}>Privacy</Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="300px"
          marginTop="45px"
          marginRight="16px"
        >
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "white",
              cursor: "pointer",
            }}
            onClick={() => {
              //   history.push(paths.blog);
            }}
          >
            Education
          </Typography>
          <Box
            onClick={() => {
              window.open(`${baseURL}/education?id=61b0b08350a2340ab35f2f0a`);
            }}
            className={classes.textItemFooter}
          >
            Learning
          </Box>
          <Box
            onClick={() => {
              window.open(`${baseURL}/education?id=61b0b04c50a23487495f2ef6`);
            }}
            className={classes.textItemFooter}
          >
            Boost
          </Box>
          <Box className={classes.textItemFooter}>Last News</Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth="300px"
          marginTop="45px"
          marginLeft="16px"
        >
          <Typography
            style={{ fontSize: "14px", fontWeight: 600, color: "white" }}
          >
            Support
          </Typography>
          <Box className={classes.textItemFooter}>About Us</Box>
          <Box
            onClick={props.handleSubmitChatAdmin}
            className={classes.textItemFooter}
          >
            Contact us
          </Box>
        </Box>
      </Container>
      <Box
        width="calc(100% - 32px)"
        height="1px"
        bgcolor="#D9DBE9"
        margin={"32px 16px 0px"}
      ></Box>
      <Box
        height="100px"
        width="100%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        color="#EFF0F6"
      >
        © 2020 Sebuda Inc. All rights reserved.
      </Box>
    </Box>
  );
};

export default Footer;

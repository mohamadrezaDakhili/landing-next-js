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
import heroImage from "../public/static/hero.jpg";
import Image from "next/image";
import { CustomButton } from "../components/kit/Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import youtubeIcon from "../public/static/images/youtube.png";
import tiktokIcon from "../public/static/images/tiktok.png";
import FacebookWhiteSvg from "../public/static/images/facebookwhite.svg";
import InstagramWhiteSvg from "../public/static/images/instagramwhite.svg";
import SmartSvg from "../public/static/images/smart.svg";
import MultipleSvg from "../public/static/images/multiple.svg";
import HandSvg from "../public/static/images/Hand.svg";
import MedalSvg from "../public/static/images/Medal.svg";
import PatternSvg from "../public/static/images/Pattern.svg";
import EmptyState from "../components/EmptyState";
import bannerImage from "../public/static/Banner-image.jpg";
import BullhornSvg from "../public/static/images/Bullhorn.svg";
import VectorSvg from "../public/static/images/Vector.svg";
import HelpSvg from "../public/static/images/Help.svg";
import imageBaner from "../public/static/images/Image-banner.png";
import Footer from "../components/footer";

const useStyles = makeStyles((theme: Theme) => ({
  hero: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "calc(100vh - 96px)",
    minHeight: "740px",
    marginTop: "6rem",
    background:'#F7F7FC'
  },
  boxBannerOne: {
    display: "flex",
    ["@media (max-width:768px)"]: {
      display: "block",
    },
  },
  bannerLandingOneLeft: {
    backgroundPosition: "center",
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
  boxBannerTwo: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "524px",
    borderRadius: "16px",
    width: "100%",
    ["@media (max-width:768px)"]: {
      width: "100%",
      borderRadius: "16px 16px 0px 0px",
      height: "250px",
    },
  },
  boxBannerThreeImage: {
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "524px",
    borderRadius: "16px",
    maxWidth: "1358px",
    width: "calc(100% - 32px) !important",
    marginX: "16px",
    position: "absolute",
    top: "0px",
    zIndex: 1,
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
    maxWidth: "412px",
    marginTop: "4px",
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
  },
}));
const Test = () => {
  const classes = useStyles();
  const theme = useTheme<Theme>();
  const isMobile = false;
  const [isLoading, setisLoading] = useState(false);

  return (
    <>
      <Box className={classes.hero}>
        <Box
          style={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100vh",
          }}
        >
          <Image
            src={heroImage}
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Container
          className={classes.heroContainer}
          disableGutters
          maxWidth={"lg"}
        >
          <Box
            display="flex"
            flexDirection="column"
            width="100%"
            style={{
              zIndex: 1,
            }}
          >
            <Box display="flex">
              <Typography className={classes.heroContentSebuda}>SE</Typography>
              <Typography className={classes.heroContentSebudaWhiteText}>
                ll
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.heroContentSebuda}>BU</Typography>
              <Typography className={classes.heroContentSebudaWhiteText}>
                y
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.heroContentSebuda}>D</Typography>
              <Typography className={classes.heroContentSebudaWhiteText}>
                igital
              </Typography>
            </Box>
            <Box display="flex">
              <Typography className={classes.heroContentSebuda}>A</Typography>
              <Typography className={classes.heroContentSebudaWhiteText}>
                ssets
              </Typography>
            </Box>
            <Box style={{ margin: "2.875rem 0" }}>
              <Typography className={classes.heroContentDescription}>
                Conscious choice.
              </Typography>
              <Typography className={classes.heroContentDescription}>
                Our best feature for you.
              </Typography>
              <Typography className={classes.heroContentDescription}>
                Things that are nowhere else!
              </Typography>
            </Box>
            <Box width="268px">
              <CustomButton
                variant={"contained"}
                color={"primary"}
                size={"large"}
              >
                Buy account
              </CustomButton>
            </Box>
            <Box
              width="100%"
              maxWidth="736px"
              marginTop="49px"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <a href="http://facebook.com/sebudacom">
                <Box
                  display="flex"
                  marginTop="8px"
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <IconButton size={"small"}>
                      <Image src={FacebookWhiteSvg} />
                    </IconButton>
                  </Box>
                </Box>
              </a>
              <a href="https://www.instagram.com/sebudacom/">
                <Box
                  display="flex"
                  marginTop="8px"
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <IconButton size={"small"}>
                      <Image src={InstagramWhiteSvg} />
                    </IconButton>
                  </Box>
                </Box>
              </a>
              <a href="https://www.youtube.com/channel/UCX3jg_Fyrh0ABDsQnI24d8A">
                <Box
                  display="flex"
                  marginTop="8px"
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <IconButton size={"small"} style={{ height: "50px" }}>
                      <Image
                        src={youtubeIcon}
                        width="50px"
                        objectFit="contain"
                      />
                    </IconButton>
                  </Box>
                </Box>
              </a>
              <a href="https://www.linkedin.com/in/sebudacom/">
                <Box
                  display="flex"
                  marginTop="8px"
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <IconButton size={"small"}>
                      <LinkedInIcon
                        style={{
                          color: "#EFF0F7",
                          width: "40px",
                          height: "40px",
                        }}
                      />
                    </IconButton>
                  </Box>
                </Box>
              </a>
              <a href="https://www.tiktok.com/@sebuda.com">
                <Box
                  display="flex"
                  marginTop="8px"
                  style={{ cursor: "pointer" }}
                >
                  <Box>
                    <IconButton size={"small"}>
                      <Image src={tiktokIcon} width="50px" height={"40px"} />
                    </IconButton>
                  </Box>
                </Box>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box marginTop="70px !important" position="relative">
        <Container
          className={classes.heroContainer}
          disableGutters
          maxWidth={"lg"}
          style={{ zIndex: 1 }}
        >
          <Grid
            container
            justifyContent={"space-between"}
            spacing={2}
            className={classes.features}
          >
            <Grid item>
              <Typography
                variant={"h4"}
                style={{
                  fontWeight: 800,
                  lineHeight: "40px",
                  letterSpacing: "-0.025em",
                }}
                noWrap
              >
                Why SEBUDA?
              </Typography>
            </Grid>
            <Grid
              item
              component={Box}
              style={{
                maxWidth: !isMobile ? 800 : "100%",
                flexBasis: !isMobile ? 800 : "100%",
              }}
            >
              <Grid
                container
                spacing={5}
                style={{ marginTop: !isMobile ? "0px" : "24px" }}
                justifyContent="center"
              >
                <Grid
                  item
                  component={Box}
                  style={{ maxWidth: 348, flexBasis: 348 }}
                >
                  <Box className={classes.featureIconWrapper}>
                    <Image src={SmartSvg} />
                  </Box>
                  <Typography
                    gutterBottom
                    style={{ fontWeight: 600 }}
                    variant={"body1"}
                  >
                    Conscious Buying
                  </Typography>
                  <Typography color={"textSecondary"} variant={"body2"}>
                    With the ability to search accurately, view account analysis
                    and comparison on the site!
                  </Typography>
                </Grid>
                <Grid
                  item
                  component={Box}
                  style={{ maxWidth: 348, flexBasis: 348 }}
                >
                  <Box className={classes.featureIconWrapper}>
                    <Image src={MultipleSvg} />
                  </Box>
                  <Typography
                    gutterBottom
                    style={{ fontWeight: 600 }}
                    variant={"body1"}
                  >
                    Special name list
                  </Typography>
                  <Typography color={"textSecondary"} variant={"body2"}>
                    Sales list for accounts with Special names or names with
                    short letters or even verified pages (with a blue tick).
                  </Typography>
                </Grid>
                <Grid
                  item
                  component={Box}
                  style={{ maxWidth: 348, flexBasis: 348 }}
                >
                  <Box className={classes.featureIconWrapper}>
                    <Image src={HandSvg} />
                  </Box>

                  <Typography
                    gutterBottom
                    style={{ fontWeight: 600 }}
                    variant={"body1"}
                  >
                    Safe and Secure
                  </Typography>
                  <Typography color={"textSecondary"} variant={"body2"}>
                    We have the fastest and most secure payment methods and we
                    guarantee the security of your user’s data and money.
                  </Typography>
                </Grid>
                <Grid
                  item
                  component={Box}
                  style={{ maxWidth: 348, flexBasis: 348 }}
                >
                  <Box className={classes.featureIconWrapper}>
                    <Image src={MedalSvg} />
                  </Box>
                  <Typography
                    gutterBottom
                    style={{ fontWeight: 600 }}
                    variant={"body1"}
                  >
                    Fast and Easy
                  </Typography>
                  <Typography color={"textSecondary"} variant={"body2"}>
                    The SeBuDA team checks account information and assists
                    parties in real 24/7 support.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        {!isMobile && (
          <Box
            position={"absolute"}
            top="100px"
            left="24px"
            height="300px"
            width="300px"
          >
            <Image src={PatternSvg} layout="fill" width={"100px"} />
          </Box>
        )}
      </Box>
      <Container
        disableGutters={!isMobile}
        style={{ maxWidth: 1013, marginTop: "48px" }}
      >
        <Box mx={!isMobile ? "1rem" : "0"}>
          <Typography
            variant={"h4"}
            style={{
              fontWeight: 800,
              lineHeight: "40px",
              letterSpacing: "-0.025em",
              marginBottom: "36px",
            }}
            noWrap
          >
            Recommended List
          </Typography>
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent={isMobile ? "space-around" : "flex-start"}
          >
            {0 === 0 && !isLoading && <EmptyState />}
            {[].map((item: any, index: any) => (
              <Box
                width={isMobile ? "auto" : "100%"}
                key={index}
                component={Box}
                pb={!isMobile ? "4vmin" : "2rem"}
                justifyContent={isMobile ? "center" : "flex-start"}
              >
                {/* <ListingItem isUniq={false} {...item} /> */}
              </Box>
            ))}
            {isLoading &&
              Array(5)
                .fill(1)
                .map((_, index) => (
                  <Grid
                    key={index}
                    component={Box}
                    pb={!isMobile ? "4vmin" : "2rem"}
                    item
                    xs={12}
                  >
                    {/* <CustomSkeleton height={"6.4rem"} /> */}
                  </Grid>
                ))}
            <Box pb={!isMobile ? "4vmin" : "2rem"} width="100%">
              <Box className={classes.listingCta}>
                <Box maxWidth={378} width={"100%"} padding="20px">
                  <Box display="flex" justifyContent="center">
                    <Typography
                      paragraph
                      style={{ fontWeight: 400 }}
                      variant={"caption"}
                    >
                      Do you need an account?
                    </Typography>
                  </Box>
                  <CustomButton
                    halfBorderRadius
                    fullWidth
                    variant={"contained"}
                    style={{ height: "46px" }}
                  >
                    View more Listing
                  </CustomButton>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box width="100%" display="flex" justifyContent="center">
        <Box
          maxWidth="1358px"
          width="100%"
          marginX="16px"
          className={classes.boxBannerOne}
        >
          <Box
            className={classes.bannerLandingOneLeft}
            style={{ position: "relative" }}
          >
            <Image
              src={bannerImage}
              className={classes.bannerLandingOneLeft}
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Box className={classes.bannerLandingOneRight}>
            <Typography
              style={{
                fontWeight: 800,
                fontSize: isMobile ? "24px" : "36px",
                color: "white",
              }}
            >
              SPECIAL NAME Account
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: isMobile ? "14px" : "18px",
                color: "#D1D5DB",
                marginTop: "12px",
              }}
            >
              List of accounts with special names!
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: isMobile ? "14px" : "18px",
                color: "#D1D5DB",
                marginTop: "4px",
              }}
            >
              Short names like: MNM, DDS and so on.
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: isMobile ? "14px" : "18px",
                color: "#D1D5DB",
                marginTop: "4px",
              }}
            >
              Single and unique names such as: DAVID, DANCE, CARPET, GUITAR and
              ...
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                fontSize: isMobile ? "14px" : "18px",
                color: "#D1D5DB",
                marginTop: "4px",
              }}
            >
              And any Instagram account that is an attractive name in a country
              or culture.
            </Typography>
            <Box width="255px" marginTop="32px">
              <CustomButton
                variant="contained"
                color="primary"
                halfBorderRadius
                onClick={
                  () => {}
                  // dispatch(push({ pathname: "/listing", search: "?uniq=true" }))
                }
              >
                View SPECIAL NAME accounts
              </CustomButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Container
        disableGutters={!isMobile}
        style={{ maxWidth: 1013, marginTop: "48px" }}
      >
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent={isMobile ? "space-around" : "flex-start"}
        >
          <Grid item xs={12}>
            <Box
              style={{
                marginBottom: "36px",
                marginLeft: "16px",
              }}
              width="fit-content"
              onClick={() => {
                // dispatch(push(paths.recentlySold));
              }}
            >
              <Typography
                style={{
                  fontWeight: 800,
                  lineHeight: "40px",
                  letterSpacing: "-0.025em",
                  cursor: "pointer",
                }}
                variant={"h4"}
                noWrap
              >
                Recently Sold
              </Typography>
            </Box>
            <Grid container spacing={1} justifyContent={"space-around"}>
              {[].map((item: any, key: any) => (
                <Grid item key={key}>
                  {/* <RecentlySoldItem key={key} {...item} /> */}
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Box marginX="16px" width="100%" pb={!isMobile ? "4vmin" : "2rem"}>
            <Box
              style={{ backgroundColor: "#828B99" }}
              className={classes.listingCta}
            >
              <Box
                maxWidth={378}
                width={"100%"}
                color={"background.paper"}
                padding="20px"
              >
                <Typography align={"center"} paragraph variant={"caption"}>
                  Do you have one 👋 for selling ?
                </Typography>
                <CustomButton
                  onClick={() => {}}
                  halfBorderRadius
                  fullWidth
                  color={"primary"}
                  variant={"contained"}
                  style={{ height: "46px" }}
                >
                  Submit your account
                </CustomButton>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Box
        width="100%"
        display="flex"
        justifyContent="center"
        position="relative"
      >
        <Box
          maxWidth="1358px"
          width="calc(100% - 32px) !important"
          marginX="16px"
          position="absolute"
          top="0px"
          zIndex="1"
          className={classes.boxBannerThreeImage}
        >
          <Image src={imageBaner} layout="fill" />
          <Box
            width="100"
            height="100%"
            style={{
              background: "#EBC011",
              mixBlendMode: "multiply",
              borderRadius: "16px",
            }}
          ></Box>
        </Box>
        <Container maxWidth={"lg"} className={classes.boxBannerThree}>
          <Typography className={classes.titleBannerThree}>
            We are always with you!
          </Typography>
          <Typography
            style={{
              maxWidth: "852px",
              fontSize: "20px",
              color: "#EFF0F6",
              marginTop: "12px",
            }}
          >
            SeBuDA is more than just a deal. This is a community!
          </Typography>
          <Typography
            style={{ maxWidth: "852px", fontSize: "20px", color: "#EFF0F6" }}
          >
            Enter social media smarter, stronger and faster.
          </Typography>
          <Typography
            style={{
              maxWidth: "852px",
              fontWeight: 600,
              fontSize: "20px",
              color: "white",
              fontStyle: "italic",
            }}
          >
            And with Sebuda, it will.
          </Typography>
          <Box className={classes.boxCards}>
            <Box className={classes.boxCard}>
              <Box className={classes.cardIcon} marginRight="16px">
                <Image src={BullhornSvg} />
              </Box>
              <Box display="flex" flexDirection="column" height="100%">
                <Box
                  height="calc(100% - 72px)"
                  width="100%"
                  padding="64px 24px 0px"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography style={{ fontSize: "20px" }}>
                    Generally
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      marginTop: "16px",
                      color: "#6B7280",
                    }}
                  >
                    A completely free platform for both buyers and sellers.
                    Commission fees are charged only from the seller for
                    successful transactions.
                  </Typography>
                </Box>
                <Box
                  height="72px"
                  width="100%"
                  bgcolor="#828B99"
                  borderRadius="0px 0px 16px 16px"
                  display="flex"
                  alignItems="center"
                  paddingLeft="24px"
                >
                  <Box
                    onClick={() => {
                      window.open(
                        `https://sebuda.com/education?id=61b0ae4150a234dbc05f2e6e`
                      );
                    }}
                    style={{ color: "#FCD535", cursor: "pointer" }}
                  >
                    How it Works? →
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.boxCard}>
              <Box className={classes.cardIcon} marginRight="16px">
                <Image src={VectorSvg} />
              </Box>
              <Box display="flex" flexDirection="column" height="100%">
                <Box
                  height="calc(100% - 72px)"
                  width="100%"
                  padding="64px 24px 0px"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography style={{ fontSize: "20px" }}>
                    Conscious buying
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      marginTop: "16px",
                      color: "#6B7280",
                    }}
                  >
                    There are many tips and features for smart shopping for
                    shoppers.
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      marginTop: "4px",
                      color: "#6B7280",
                    }}
                  >
                    You will find all the information that is important to you
                    in the sales list.
                  </Typography>
                </Box>
                <Box
                  height="72px"
                  width="100%"
                  bgcolor="#828B99"
                  borderRadius="0px 0px 16px 16px"
                  display="flex"
                  alignItems="center"
                  paddingLeft="24px"
                >
                  <Box
                    onClick={() => {
                      window.open(
                        `https://sebuda.com/education?id=61b0ae9350a2347d065f2e7f`
                      );
                    }}
                    style={{ color: "#FCD535", cursor: "pointer" }}
                  >
                    Buyers →
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={classes.boxCard}>
              <Box className={classes.cardIcon}>
                <Image src={HelpSvg} />
              </Box>
              <Box display="flex" flexDirection="column" height="100%">
                <Box
                  height="calc(100% - 72px)"
                  width="100%"
                  padding="64px 24px 0px"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography style={{ fontSize: "20px" }}>
                    Convenient sales
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      marginTop: "16px",
                      color: "#6B7280",
                    }}
                  >
                    There are many possibilities for sellers to be able to
                    display all the capabilities of their account.
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "16px",
                      marginTop: "4px",
                      color: "#6B7280",
                    }}
                  >
                    The real value of accounts is their information and
                    statistics!
                  </Typography>
                </Box>
                <Box
                  height="72px"
                  width="100%"
                  bgcolor="#828B99"
                  borderRadius="0px 0px 16px 16px"
                  display="flex"
                  alignItems="center"
                  paddingLeft="24px"
                >
                  <Box
                    style={{ color: "#FCD535", cursor: "pointer" }}
                    onClick={() => {
                      window.open(
                        `https://sebuda.com/education?id=61b0afec50a2348e255f2ed9`
                      );
                    }}
                  >
                    Sellers →
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Footer handleSubmitChatAdmin={() => {}} />
    </>
  );
};

export default Test;

import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    primary: {
      light: "#EEE5FE",
      main: "#fcd535", 
      dark: "#bf9d0f", 
      contrastText: "#000",
    },
    secondary: {
      light: "#FFAC66",
      main: "#FF7500",
      dark: "#CC5E00",
      contrastText: "#fff",
    },
    error: {
      light: "#FFF2F9",
      main: "#E40173",
      dark: "#98014C",
      contrastText: "#fff",
    },
    warning: {
      light: "#F2F294",
      main: "#EEEE2C",
      dark: "#6A5300",
      contrastText: "#263238",
    },
    info: {
      light: "#F2F5FF",
      main: "#9BB2FD",
      dark: "#a37f00", //
      contrastText: "#021964",
    },
    success: {
      light: "#E5FFF2",
      main: "#00CC67",
      dark: "#00994D",
      contrastText: "#fff",
    },
    grey: {
      100: "#FCFCFC",
      200: "#F7F7FC",
      300: "#EFF0F6",
      400: "#D9DBE9",
      500: "#A0A3BD", // placeholder
      600: "#6E7191",
      700: "#4E4B66",
      800: "#262338",
      900: "#14142B",
    },
    text: {
      primary: "#262338",
      secondary: "#4E4B66",
      disabled: "#A0A3BD",
    },
    divider: "#D9DBE9",
    background: {
      paper: "#fff",
      default: "#F7F7FC",
    },
    // action: {
    // 	active: '#fff',
    // 	hover: '#EBFAF7',
    // 	selected: '#ebfaf7',
    // 	disabled: '#CCCCCC',
    // 	focus: '#fff',
    // 	disabledBackground: '#ebfaf7',
    // },
    common: {
      white: "#EFF0F6",
      black: "#262338",
    },
  },
  shadows: [
    "none",
    "0px 4px 8px rgba(97, 97, 97, 0.14), 0px 8px 16px rgba(97, 97, 97, 0.14)",
    "0px 8px 18px rgba(0, 0, 0, 0.28)",
    "0px 18px 33px rgba(166, 94, 75, 0.35)",
    "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)",
    "0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)",
    "0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)",
    "0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)",
    "0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)",
    "0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)",
    "0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)",
    "0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)",
    "0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)",
    "0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)",
    "0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)",
    "0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)",
    "0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)",
    "0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)",
    "0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)",
    "0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)",
    "0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)",
    "0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)",
  ],
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Poppins", "sans-serif"].join(", "),
    fontSize: 15,
    fontWeightLight: 200,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: {},
    h2: {},
    h3: {},
    h4: {},
    h5: {},
    h6: {},
    subtitle1: {},
    subtitle2: {},
    body1: {
      fontSize: "13px",
    },
    body2: {
      fontSize: "15px",
    },
    button: {},
    caption: {},
    overline: {},
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@global": {
          html:
            process.env.NODE_ENV === "production"
              ? {
                  ["@media (min-width:1281px)"]: {
                    fontSize: "12px",
                  },
                  ["@media (min-width:1441px)"]: {
                    fontSize: "14px",
                  },
                  ["@media (max-width:1280px)"]: {
                    fontSize: "12px",
                  },
                  ["@media (max-width:960px)"]: {
                    fontSize: "14px",
                  },
                }
              : {},
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          borderRadius: 4,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        li: {
          color: "#6E7191",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {
          userSelect: "none",
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 4,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          paddingTop: 12,
          paddingBottom: 12,
          textTransform: "capitalize",
        },
        outlined: {
          paddingTop: 11,
          paddingBottom: 11,
          "&.MuiButton-outlinedPrimary": {
            borderWidth: 2,
          },
          "&.MuiButton-outlinedPrimary:hover": {
            borderWidth: 2,
          },
          "&.MuiButton-outlinedSecondary": {
            borderWidth: 2,
          },
          '&.MuiButton-outlinedSecondary:h"(min-width:600px)"over': {
            borderWidth: 2,
          },
        },
        text: {
          paddingTop: 11,
          paddingBottom: 11,
        },
        sizeSmall: {
          paddingTop: 2,
          paddingBottom: 4,
        },
        sizeLarge: {
          paddingTop: 18,
          paddingBottom: 18,
        },
      },
    },
    MuiFilledInput: {
      styleOverrides: {
        // inputMarginDense: {
        //   paddingTop: 14,
        //   paddingBottom: 4,
        // },
        input: {
          paddingTop: 24,
          paddingBottom: 7,
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            color: "#a37f00",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          bottom: 0,
          transform: "translate(0,100%)",
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        },

        ul: {
          "& li .MuiPaginationItem-root": {
            // :not(.MuiPaginationItem-root:last-child)
            ":last-child": {
              border: "none",
            },
            ":first-child": {
              border: "none",
            },
          },
        },
      },
    },

    // MuiPickersToolbarText-toolbarTxt
    // MuiPickersCalendarHeader: {
    //   iconButton: {},
    //   toolbarTxt: {
    //     color: "#0CBF95",
    //   },
    // },
    // MuiPickersToolbar: {},
    // MuiPickersDatePickerRoot: {
    //   toolbar: {
    //     "& *": {
    //       color: "#fff",
    //     },
    //     "& h4": {
    //       fontSize: 26,
    //     },
    //     "& h6": {
    //       fontSize: 30,
    //     },
    //   },
    // },
    MuiAccordion: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          "&:before": {
            height: 0,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          flexDirection: "row-reverse",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidthLg: {
          position: "relative",
          maxWidth: 1440,
        },
      },
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          top: 0,
          padding: "0 4px",
          paddingTop: "2px",
          height: 12,
          fontWeight: 600,
          fontSize: 8,
          lineHeight: 8,
        },
      },
    },
  },
};

export default lightThemeOptions;

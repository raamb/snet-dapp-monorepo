export const useStyles = MUITheme => ({
  walletAccContainer: {
    width: 846,
    paddingTop: 40,
    margin: "70px 0 64px 70px",
    "@media(max-width:1150px)": {
      width: "90%",
      margin: "70px auto",
    },
  },
  topSection: {
    "& h5": {
      paddingTop: 24,
      fontWeight: 200,
    },
  },
  box: {
    borderRadius: 4,
    marginTop: 24,
    background: MUITheme.palette.background.white,
    boxShadow: "0 1px 1px 0 rgba(0,0,0,0.07), 0 2px 1px -1px rgba(0,0,0,0.07), 0 1px 3px 0 rgba(0,0,0,0.1)",
  },
  pendingTokenSection: {
    paddingBottom: 22,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.grey,
    margin: "22px 16px 0 23.5px",
    display: "flex",
    alignItems: "center",
    "& p": {
      color: MUITheme.palette.text.lightGrey,
      fontSize: 14,
      lineHeight: "18px",
    },
    "& button": {
      padding: "13px 0 11px",
      margin: "0 32px",
      "& span": { width: 470 },
    },
  },
  pendingTokenDetails: {
    "& div": {
      display: "flex",
      "& svg": {
        paddingRight: 8,
        color: MUITheme.palette.text.lightGrey,
        fontSize: 18,
      },
      "& p": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 16,
        lineHeight: "20px",
      },
    },
    "& > p": {
      paddingTop: 5,
      display: "flex",
      alignItems: "center",
      color: MUITheme.palette.text.darkGrey,
      fontSize: 28,
      lineHeight: "35px",
      "& span": {
        paddingLeft: 10,
        color: MUITheme.palette.text.lightGrey,
        fontSize: 18,
        lineHeight: "20px",
        textTransform: "uppercase",
      },
    },
  },
  expiringDetailsSection: {
    padding: "7px 0 13px",
    display: "flex",
    justifyContent: "space-around",
    "& > div": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      "& p": {
        "&:first-of-type": {
          paddingBottom: 6,
          color: MUITheme.palette.text.lightGrey,
          fontSize: 14,
          lineHeight: "18px",
        },
        "&:last-of-type": {
          display: "flex",
          alignItems: "center",
          color: MUITheme.palette.text.darkGrey,
          fontSize: 22,
          lineHeight: "28px",
          "& span": {
            paddingLeft: 10,
            color: MUITheme.palette.text.lightGrey,
            fontSize: 16,
            lineHeight: "20px",
            textTransform: "uppercase",
          },
        },
      },
    },
  },
  header: {
    padding: "0 23px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    display: "flex",
    justifyContent: "space-between",
    "& h6": {
      fontWeight: 400,
      lineHeight: "50px !important",
    },
    "& button": { padding: 0 },
  },
  claimsAggregateContainer: {
    padding: "24px 17px",
    border: "1px solid #f1f1f1",
    borderRadius: 6,
    backgroundColor: MUITheme.palette.background.mainContent,
    "& > div": {
      "& > div": {
        "& p": { color: MUITheme.palette.text.lightGrey },
      },
      "& > p": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 28,
        lineHeight: "35px",
        "& span": {
          paddingLeft: 8,
          color: MUITheme.palette.text.lightGrey,
          fontSize: 16,
          lineHeight: "20px",
        },
      },
    },
  },
  walletAccWrapper: { padding: "24px 23px 40px" },
  alertBoxContainer: { marginTop: 124 },
  headerAccountDetails: {
    padding: "0 23px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    cursor: "pointer",
    "& h6": {
      fontWeight: 400,
      lineHeight: "50px !important",
    },
    "& svg": { color: MUITheme.palette.text.lightGrey },
  },
  infoIcon: {
    marginRight: 8,
    color: MUITheme.palette.text.disabled,
    fontSize: 24,
  },
  iconContainer: {
    display: "flex",
    alignItems: "center",
    "& p": {
      color: MUITheme.palette.text.primary,
      fontSize: 16,
      lineHeight: "20px",
    },
  },
  wrapper: {
    padding: "27px 24px 0 32px",
    "& > div": {
      "&:first-of-type": { paddingBottom: 10 },
    },
  },
  boxValue: {
    padding: "14px 0",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#e2e2e2",
    borderRadius: 4,
    color: MUITheme.palette.text.darkGrey,
    backgroundColor: "#f8f8f8",
    fontSize: 16,
    lineHeight: "20px",
    textAlign: "center",
    "& span": {
      fontSize: 12,
      lineHeight: "15px",
    },
  },
  valueContainer: {
    display: "flex",
    alignItems: "center",
  },
  value: {
    color: MUITheme.palette.text.darkGrey,
    fontSize: 16,
    lineHeight: "20px",
  },
  collapseContainer: { paddingBottom: 32 },
  claimsDesc: {
    paddingBottom: 24,
    color: MUITheme.palette.text.darkGrey,
    fontSize: 14,
    lineHeight: "18px",
  },
  claimSelectedSection: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    "& p": {
      marginLeft: 32,
      color: MUITheme.palette.text.lightGrey,
      fontSize: 16,
      lineHeight: "20px",
    },
    "& button": {
      padding: "10px 28px 9px",
      marginTop: 24,
      boxShadow:
        "0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2) !important",
    },
  },
  table: { padding: "24px 26px 31px 23px" },
  tableCol: {
    padding: "0 34px 10px 40px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.secondary,
    display: "flex",
    "& > div": {
      "& p": {
        color: MUITheme.palette.text.lightGrey,
        fontSize: 13,
        lineHeight: "16px",
        textTransform: "uppercase",
      },
      "&:nth-child(2n)": { textAlign: "right" },
      "&:nth-child(3)": { textAlign: "center" },
    },
  },
  tableRow: {
    padding: "3px 34px 3px 9px",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.secondary,
    marginBottom: 45,
    display: "flex",
    alignItems: "center",
    "& > div": {
      display: "flex",
      "& label": {
        "& span": {
          color: MUITheme.palette.text.darkGrey,
          fontSize: 14,
          letterSpacing: 0.17,
          lineHeight: "18px",
        },
        "& svg": { color: "rgba(0,0,0,0.54)" },
      },
      "& p": {
        color: MUITheme.palette.text.darkGrey,
        fontSize: 14,
        letterSpacing: 0.17,
        lineHeight: "18px",
      },
      "&:nth-child(2n)": { justifyContent: "flex-end" },
      "&:nth-child(3)": { justifyContent: "center" },
    },
  },
  warningIcon: {
    paddingRight: 8,
    color: "#F29132",
    fontSize: 19,
  },
  card: {
    width: 720,
    margin: "110px auto 0",
  },
  cardHeader: {
    padding: 0,
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    borderBottomColor: MUITheme.palette.border.primary,
    "& h6": {
      paddingLeft: 22,
      lineHeight: "50px !important",
    },
    "& .MuiCardHeader-action": { margin: 0 },
  },
  styledPagination: {
    "& .MuiSelect-selectMenu": {
      padding: "3px 13px",
      fontSize: 16,
    },
  },
  greyBox: {
    padding: "20px 24px 24px 20px",
    "& > div": {
      padding: "3px 22px",
      borderRadius: 4,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: "#f8f8f8",
      "&:first-of-type": { borderBottom: "1px solid #e2e2e2" },
      "& > p": {
        margin: 0,
        color: MUITheme.palette.text.darkGrey,
        fontSize: 28,
        lineHeight: "35px",
        "& span": {
          paddingLeft: 8,
          color: MUITheme.palette.text.lightGrey,
          fontSize: 16,
          lineHeight: "20px",
        },
      },
    },
  },
  metaMaskContainer: {
    margin: "110px 0 145px",
    textAlign: "center",
    "& img": { width: 300 },
  },
  walletAccHeading: {
    marginBottom: 45,
    textAlign: "left",
  },
  metamaskTitle: {
    color: MUITheme.palette.text.primary,
    fontSize: 24,
    fontWeight: 200,
    lineHeight: "30px",
  },
  metamaskDesc: {
    margin: "10px 0 25px",
    color: MUITheme.palette.text.lightGrey,
    fontSize: 16,
    fontWeight: 300,
    lineHeight: "20px",
    "& span": { display: "block" },
    "& a": {
      color: MUITheme.palette.primary.main,
      textDecoration: "none",
    },
  },
  metamaskContent: {
    position: "relative",
    transform: "translateX(-9%)",
    "& > div": {
      width: "100%",
      position: "absolute",
      bottom: -95,
      left: "50%",
      transform: "translateX(-50%)",
    },
    [MUITheme.breakpoints.down("md")]: { transform: "none" },
  },
});

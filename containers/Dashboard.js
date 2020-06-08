import clsx from "clsx";
import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import List from "@material-ui/core/List";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { MainListItems, SecondaryListItems } from "./listItem";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const drawerWidth = 240;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  backgroundIcon: {
    display: "flex",
    position: "relative",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 100,
  },
  icon: {
    position: "absolute",
    width: 100,
    height: 100,
    borderRadius: "50%",
    backgroundColor: "black",
    top: -20,
  },
  iconContents: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 15,
  },
  iconButton: {
    width: 50,
    height: 50,
    borderRadius: "50%",
    backgroundColor: "black",
    marginLeft: theme.spacing(3),
  },
});

const Dashboard = (props) => {
  const { classes } = props;
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <div className={classes.iconButton}></div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        {open ? (
          <div>
            <Fade in={open}>
              <div>
                <div className={classes.backgroundIcon}>
                  <div className={classes.icon} />
                </div>
                <div className={classes.iconContents}>
                  <div>Name</div>
                  <div>Email</div>
                </div>
              </div>
            </Fade>
          </div>
        ) : null}
        <Divider />
        <List>
          <MainListItems />
        </List>
        <Divider />
        <List>
          <SecondaryListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          {props.children}
        </Container>
      </main>
      <style jsx>{``}</style>
    </div>
  );
};

export default withStyles(styles)(Dashboard);

// <Grid container spacing={3}>
//             {/* Chart */}
//             <Grid item xs={12} md={8} lg={9}>
//               <Paper className={fixedHeightPaper}>
//                 <Chart />
//               </Paper>
//             </Grid>
//             {/* Recent Deposits */}
//             <Grid item xs={12} md={4} lg={3}>
//               <Paper className={fixedHeightPaper}>
//                 <Deposits />
//               </Paper>
//             </Grid>
//             {/* Recent Orders */}
//             <Grid item xs={12}>
//               <Paper className={classes.paper}>
//                 <Orders />
//               </Paper>
//             </Grid>
//           </Grid>
//           <Box pt={4}>
//             <Copyright />
//           </Box>

import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MainListItems = () => {
  const classes = useStyles();
  const [openRealtime, setOpenRealtime] = useState(false);
  // BRT Record State
  const [openRecordBrt, setOpenRecordBrt] = useState(false);
  // Daily Inspection State
  const [openInspect, setOpenInspect] = useState(false);
  // LossCode State
  const [openCode, setOpenCode] = useState(false);
  // GuideLine State
  const [openGuide, setOpenGuide] = useState(false);

  const handleRealTime = () => {
    setOpenRealtime(!openRealtime);
  };

  const handleRecordBrt = () => {
    setOpenRecordBrt(!openRecordBrt);
  };

  const handleInspect = () => {
    setOpenInspect(!openInspect);
  };

  const handleCode = () => {
    setOpenCode(!openCode);
  };

  const handleGuide = () => {
    setOpenGuide(!openGuide);
  };

  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      subheader={<ListSubheader component="div">Pillar</ListSubheader>}
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={handleRealTime}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
        {openRealtime ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={openRealtime} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleRecordBrt}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="BRT Record" />
        {openRecordBrt ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={openRecordBrt} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleInspect}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Inspect PM, Daily" />
        {openInspect ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={openInspect} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleGuide}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Guide Book" />
        {openGuide ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={openGuide} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

const SecondaryListItems = () => {
  return (
    <List
      component="nav"
      aria-label="main mailbox folders"
      subheader={<ListSubheader inset>Saved reports</ListSubheader>}
    >
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Current month" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Last quarter" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Year-end sale" />
      </ListItem>
    </List>
  );
};

export { MainListItems, SecondaryListItems };

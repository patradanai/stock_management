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
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AvTimerIcon from "@material-ui/icons/AvTimer";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";

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
  const objName = {
    obj1: "Dashboard",
    obj2: "RealTime",
    obj3: "BRT Record",
    obj4: "Inspect Daily, PM",
    obj5: "Guide Book",
    obj6: "Analysis",
  };
  // Reatime State
  const [openRealtime, setOpenRealtime] = useState(false);
  // BRT Record State
  const [openRecordBrt, setOpenRecordBrt] = useState(false);
  // Daily Inspection State
  const [openInspect, setOpenInspect] = useState(false);
  // LossCode State
  const [openAnalyze, setOpenAnalyze] = useState(false);
  // GuideLine State
  const [openGuide, setOpenGuide] = useState(false);

  // Function Realtime
  const handleRealTime = () => {
    setOpenRealtime(!openRealtime);
  };

  // Function BRT
  const handleRecordBrt = () => {
    setOpenRecordBrt(!openRecordBrt);
  };

  // Function Inspect
  const handleInspect = () => {
    setOpenInspect(!openInspect);
  };

  // Function Analyze
  const handleAnalyze = () => {
    setOpenAnalyze(!openAnalyze);
  };

  // Function Guide
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
        <ListItemText primary={objName.obj1} />
      </ListItem>
      <ListItem button onClick={handleRealTime}>
        <ListItemIcon>
          <AvTimerIcon />
        </ListItemIcon>
        <ListItemText primary={objName.obj2} />
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
        <ListItemText primary={objName.obj3} />
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
        <ListItemText primary={objName.obj4} />
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
        <ListItemText primary={objName.obj5} />
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
      <ListItem button onClick={handleAnalyze}>
        <ListItemIcon>
          <LibraryBooksIcon />
        </ListItemIcon>
        <ListItemText primary={objName.obj6} />
        {openAnalyze ? <ExpandMore /> : <ExpandLess />}
      </ListItem>
      <Collapse in={openAnalyze} timeout="auto" unmountOnExit>
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

import { MuiTypography } from "@material-ui/core";
import PropTypes from "prop-types";

const variantMapping = {
  h1: "h1",
  h2: "h1",
  h3: "h1",
  h4: "h1",
  h5: "h3",
  h6: "h2",
  subtitle1: "h3",
};

const Typography = (props) => {
  return (
    <MuiTypography
      variantMapping={variantMapping}
      variant={props.variant}
      {...props}
    >
      {props.children}
    </MuiTypography>
  );
};

Typography.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node,
};

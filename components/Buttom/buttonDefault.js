import { MuiButton } from "material-ui/core";
import { withStyles } from "material-ui/styles";
import PropTypes from "prop-types";

const styles = (theme) => ({
    root: {
        borderRadius: 0,
        fontWeight: theme.typography.fontWeightMedium,
        fontFamily: theme.typography.fontFamilySecondary,
        padding: theme.spacing(2, 4),
        fontSize: theme.typography.pxToRem(14),
        boxShadow: 'none',
        '&:active, &:focus': {
          boxShadow: 'none',
        },
      },
      sizeSmall: {
        padding: theme.spacing(1, 3),
        fontSize: theme.typography.pxToRem(13),
      },
      sizeLarge: {
        padding: theme.spacing(2, 5),
        fontSize: theme.typography.pxToRem(16),
      
});

const ButtonDefault = (props) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default withStyles(styles)(ButtonDefault);

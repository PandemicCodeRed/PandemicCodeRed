import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import green from '@material-ui/core/colors/green';
import blue from '@material-ui/core/colors/blue';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: green[800],
    },
  },
});
function WarningIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M.5 16h17L9 1 .5 16zm9.5-2H8v-2h2v2zm0-3H8V7h2v4z" />
    </SvgIcon>
  );
}

function InfectionBoardNavbar(props) {
  const { classes } = props;
  return (
    <div>

      <Button variant="contained" color="primary" className={classes.button}>
        Infection Deck
      </Button>

      <GridList cellHeight={100} className={classes.gridList} cols={2}>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningIcon
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
        <GridListTile>
          <WarningSource
            className={classes.icon}
            color="primary"
            fontSize="large"
            component={svgProps => (
              <svg {...svgProps}>
                <defs>
                  <linearGradient id="gradient1">
                    <stop offset="30%" stopColor={blue[400]} />
                    <stop offset="70%" stopColor="#00ff00" />
                  </linearGradient>
                </defs>
                {React.cloneElement(svgProps.children[0], {
                  fill: 'url(#gradient1)',
                })}
              </svg>
            )}
          />
        </GridListTile>
      </GridList>
    </div>
  );
} //use a button group? rather than div and ul

InfectionBoardNavbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InfectionBoardNavbar);

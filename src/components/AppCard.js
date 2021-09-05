import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  cardContent: {
    padding: '1rem 3rem 1rem 3rem',
  },
});

const AppCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        {props.children}
      </CardContent>
    </Card>
  );
};

export default AppCard;

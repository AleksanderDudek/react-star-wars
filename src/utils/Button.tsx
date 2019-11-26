import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1)
      }
    }
  })
);

interface IProps {
    disabled: boolean;
    onClick: Function;
    text: string;
    id?: string;
}

function MyButton(props: IProps): JSX.Element {
  const classes = useStyles();

  const { disabled, onClick, text, id } = props;

  return (
    <div className={classes.root}>
      <Button
        id={id}
        variant='contained'
        color='primary'
        disabled={disabled}
        onClick={() => { onClick(); }}
      >
        {text}
      </Button>
    </div>
  );
}

export default MyButton;
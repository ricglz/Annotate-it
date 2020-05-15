import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonsRow: {
      margin: '1rem 0',
    },
  }),
);

interface Props {
  children: ReactNode
}

const NotesButtonsRow = ({ children }: Props) => {
  const { buttonsRow } = useStyles();
  return (
    <Grid
      className={buttonsRow}
      container
      direction="row-reverse"
      spacing={2}
    >
      { children }
    </Grid>
  );
}

export default NotesButtonsRow;

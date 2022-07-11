import Grid from '@material-ui/core/Grid';
import React, { ReactNode } from 'react';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) => createStyles({
  buttonsRow: {
    margin: '1rem 0',
  },
  titleWrapper: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

interface Props {
  children: ReactNode;
  title?: string;
}

const NotesButtonsRow = ({ children, title }: Props) => {
  const { buttonsRow, titleWrapper } = useStyles();
  return (
    <Grid
      className={buttonsRow}
      container
      direction="row-reverse"
      spacing={2}
    >
      { children }
      { title && (
        <Grid item className={titleWrapper}>
          <Typography variant="h4">{title}</Typography>
        </Grid>
      )}
    </Grid>
  );
}

export default NotesButtonsRow;

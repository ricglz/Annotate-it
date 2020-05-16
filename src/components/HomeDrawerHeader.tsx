import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonGrid: {
      height: '100%',
    },
  }),
);

interface Props {
  onClick: (e: any) => void;
}

const HomeDrawerHeader = ({ onClick }: Props) => {
  const { buttonGrid } = useStyles();
  return (
    <NotesButtonsRow title="Folders">
      <Grid item>
        <Button
          aria-label="create folder"
          className={buttonGrid}
          color="primary"
          onClick={onClick}
          size="small"
        >
          <CreateIcon />
        </Button>
      </Grid>
    </NotesButtonsRow>
  );
};

export default HomeDrawerHeader;

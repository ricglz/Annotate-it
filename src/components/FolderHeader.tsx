import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useDeleteFolderMutation from '../mutations/useDeleteFolderMutation';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    label: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);

const FolderHeader = ({ folder }: any) => {
  const { label } = useStyles();
  const [deleteCommit, { loading }] = useDeleteFolderMutation();
  return (
    <NotesButtonsRow>
      <Grid item>
        <Button
          color="secondary"
          onClick={loading ? () => {} : deleteCommit}
          size="small"
          startIcon={<DeleteIcon />}
          variant="contained"
        >
          { loading ? 'Deleting' : 'Delete' } Folder
        </Button>
      </Grid>
      <Grid item>
        <Button
          color="primary"
          onClick={() => { console.log('Create') }}
          size="small"
          startIcon={<CreateIcon />}
          variant="contained"
        >
          Create Note
        </Button>
      </Grid>
      <Grid item className={label}>
        <Typography variant="h4">Folder: {folder.name}</Typography>
      </Grid>
    </NotesButtonsRow>
  );
};

export default FolderHeader;

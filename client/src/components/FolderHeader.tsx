import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import useDeleteFolderMutation from '../mutations/useDeleteFolderMutation';
import { useHistory, useRouteMatch } from 'react-router-dom';

const FolderHeader = ({ folder }: any) => {
  const [deleteCommit, { loading }] = useDeleteFolderMutation();
  const history = useHistory();
  const { url } = useRouteMatch();
  const onClickCreate = React.useCallback(() => {
    history.push(`${url}/notes/new`);
  }, [history, url]);
  return (
    <NotesButtonsRow title={`Folder: ${folder.name}`}>
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
          onClick={onClickCreate}
          size="small"
          startIcon={<CreateIcon />}
          variant="contained"
        >
          Create Note
        </Button>
      </Grid>
    </NotesButtonsRow>
  );
};

export default FolderHeader;

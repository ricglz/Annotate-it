import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import NoteTagsList from './NoteTagsList';
import NotesButtonsRow from './NotesButtonsRow';
import PencilIcon from '@material-ui/icons/Edit';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import useDeleteNoteMutation from '../mutations/useDeleteNoteMutation';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
  note: any
}

const NotesRenderer = ({ note }: Props) => {
  const { content } = note;
  const { url } = useRouteMatch();
  const history = useHistory();
  const [onClickDelete, { loading }] = useDeleteNoteMutation();
  const onClickEdit = React.useCallback(() => {
    history.push(`${url}/edit`);
  }, [url, history]);
  return (
    <>
      <NotesButtonsRow>
        <Grid item>
          <Button
            color="secondary"
            onClick={loading ? () => {} : onClickDelete}
            size="small"
            startIcon={<DeleteIcon />}
            variant="contained"
          >
            { loading ? 'Deleting...' : 'Delete' }
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="primary"
            onClick={onClickEdit}
            size="small"
            startIcon={<PencilIcon />}
            variant="contained"
          >
            Edit
          </Button>
        </Grid>
        <NoteTagsList note={note} />
      </NotesButtonsRow>
      <ReactMarkdown source={content} />
    </>
  );
};

export default NotesRenderer;

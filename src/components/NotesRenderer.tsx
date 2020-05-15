import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import PencilIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useRouteMatch } from 'react-router-dom';
import useDeleteNoteMutation from '../mutations/useDeleteNoteMutation';

interface Props {
  content: string
}

const NotesRenderer = ({ content }: Props) => {
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
      </NotesButtonsRow>
      <ReactMarkdown source={content} />
    </>
  );
};

export default NotesRenderer;

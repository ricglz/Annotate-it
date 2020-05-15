import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import PencilIcon from '@material-ui/icons/Edit';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import { useHistory, useRouteMatch } from 'react-router-dom';

interface Props {
  content: string
}

const NotesRenderer = ({ content }: Props) => {
  const { url } = useRouteMatch();
  const history = useHistory();
  const onClickEdit = React.useCallback(() => {
    history.push(`${url}/edit`);
  }, [url, history]);
  return (
    <>
      <NotesButtonsRow>
        <Grid item>
          <Button
            onClick={onClickEdit}
            size="small"
            startIcon={<PencilIcon />}
            variant="contained"
          >
            Edit Note
          </Button>
        </Grid>
      </NotesButtonsRow>
      <ReactMarkdown source={content} />
    </>
  );
};

export default NotesRenderer;

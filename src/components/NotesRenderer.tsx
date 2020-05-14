import Button from '@material-ui/core/Button';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import PencilIcon from '@material-ui/icons/Edit';
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
      <Button
        onClick={onClickEdit}
        size="small"
        startIcon={<PencilIcon />}
        variant="contained"
      >
        Edit Note
      </Button>
      <ReactMarkdown source={content} />
    </>
  );
};

export default NotesRenderer;

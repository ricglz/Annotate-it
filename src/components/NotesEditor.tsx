import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesTextArea from './NotesTextArea';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import useUpdateNotesContentMutation from '../mutations/useUpdateNotesContentMutation';

interface Props {
  content: string
}

const NotesEditor = ({ content }: Props) => {
  const [onClickEdit, { loading, onChange, text }] = useUpdateNotesContentMutation(content);
  return (
    <>
      <NotesButtonsRow>
        <Grid item>
          <Button
            onClick={loading ?  () => {} : onClickEdit}
            size="small"
            startIcon={<SaveIcon />}
            variant="contained"
          >
            { loading  ? 'Saving...' : 'Save' }
          </Button>
        </Grid>
      </NotesButtonsRow>
      <NotesTextArea value={text} onChange={onChange} />
    </>
  );
}

export default NotesEditor;

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesTextArea from './NotesTextArea';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import SelectNoteTags from './SelectNoteTags';
import useUpdateNotesContentMutation from '../mutations/useUpdateNotesContentMutation';

interface Props {
  note: any
}

const NotesEditor = ({ note }: Props) => {
  const { content } = note;
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
      <SelectNoteTags note={note} />
      <NotesTextArea value={text} onChange={onChange} />
    </>
  );
}

export default NotesEditor;

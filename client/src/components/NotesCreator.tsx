import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesTextArea from './NotesTextArea';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import useCreateNoteMutation from '../mutations/useCreateNoteMutation';

interface Props {
  content: string
}

const NotesCreator = () => {
  const [onClickEdit, { loading, onChange, content }] = useCreateNoteMutation();
  return (
    <>
      <NotesButtonsRow title="New note">
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
      <NotesTextArea value={content} onChange={onChange} />
    </>
  );
}

export default NotesCreator;

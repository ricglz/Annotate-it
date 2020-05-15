import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import NotesButtonsRow from './NotesButtonsRow';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useUpdateNotesContentMutation from '../mutations/useUpdateNotesContentMutation';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface Props {
  content: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textarea: {
      padding: '1rem',
      width: '100%',
    },
  }),
);

const NotesEditor = ({ content }: Props) => {
  const { textarea } = useStyles();
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
      <TextareaAutosize
        aria-label="Note content edit area"
        className={textarea}
        onChange={onChange}
        rowsMin={3}
        value={text}
      />
    </>
  );
}

export default NotesEditor;

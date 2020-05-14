import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import React from 'react';
import SaveIcon from '@material-ui/icons/Save';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTextField from '../hooks/useTextField';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

interface Props {
  content: string
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    buttonsRow: {
      margin: '1rem 0',
    },
    textarea: {
      padding: '1rem',
      width: '100%',
    },
  }),
);

const NotesEditor = ({ content }: Props) => {
  const { textarea, buttonsRow } = useStyles();
  const [text, onChange] = useTextField(content);
  return (
    <>
      <Grid
        className={buttonsRow}
        container
        direction="row-reverse"
        spacing={2}
      >
        <Grid item>
          <Button variant="contained" size="small" startIcon={<SaveIcon />}>
            Save
          </Button>
        </Grid>
      </Grid>
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

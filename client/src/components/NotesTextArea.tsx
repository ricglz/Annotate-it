import React, { ChangeEvent } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((_: Theme) => createStyles({
  textarea: {
    padding: '1rem',
    width: '100%',
  },
}));

interface Props {
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const NotesTextArea = ({ onChange, value }: Props) => {
  const { textarea } = useStyles();
  return (
    <TextareaAutosize
      aria-label="Edit area to change the content"
      className={textarea}
      onChange={onChange}
      rowsMin={3}
      value={value}
    />
  );
};

export default NotesTextArea;

import React from 'react';
import Select from 'react-select';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useNoteTagsPagination from '../hooks/useNoteTagsPagination';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme ) => createStyles({
  root: {
    color: 'black',
    margin: theme.spacing(2, 0),
  },
}));

interface Props {
  note: any;
}

const SelectNoteTags = (props: Props) => {
  const { root } = useStyles();
  const edges = useNoteTagsPagination(props);
  const options = edges.map(
    ({ node }: any) => ({ value: node.id, label: node.name })
  );
  return (
    <Select
      className={root}
      isMulti
      name="tags"
      options={options}
    />
  );
};

export default SelectNoteTags;

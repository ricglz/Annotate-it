import React from 'react';
import Select from 'react-select';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useNoteTagsPagination from '../hooks/useNoteTagsPagination';
import useViewerTagsPagination from '../hooks/useViewerTagsPagination';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme ) => createStyles({
  root: {
    color: 'black',
    margin: theme.spacing(2, 0),
  },
}));

interface Props {
  note: any;
  viewer: any;
}

const nodeToOption = ({ node }: any) => ({ value: node.id, label: node.name });

const SelectNoteTags = (props: Props) => {
  const { root } = useStyles();
  const selectedEdges = useNoteTagsPagination(props);
  const allEdges = useViewerTagsPagination(props);
  const selected = selectedEdges.map(nodeToOption);
  const options = allEdges.map(nodeToOption);
  return (
    <Select
      className={root}
      defaultValue={selected}
      isMulti
      name="tags"
      options={options}
    />
  );
};

export default SelectNoteTags;

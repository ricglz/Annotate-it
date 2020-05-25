import React from 'react';
import useNoteTagsPagination from '../hooks/useNoteTagsPagination';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme ) => createStyles({
  link: {
    color: theme.palette.primary.dark,
    padding: theme.spacing(0, 2),
  },
  root: {
    display: 'flex',
    flex: 1,
    listStyleType: 'none',
  },
}));

interface Props {
  note: any;
}

const NoteTagsList = (props: Props) => {
  const { link, root } = useStyles();
  const edges = useNoteTagsPagination(props);
  const items = edges.map(({ node }: any) => (
    <li className={link} key={node.id}>{node.name}</li>
  ));
  return <ul className={root}>{items}</ul>;
};

export default NoteTagsList;

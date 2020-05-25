import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { graphql } from 'react-relay';
import { useFragment } from 'relay-hooks';

const fragment = graphql`
  fragment NoteLink_node on Note {
    id
    title
    updatedAt
  }
`;

const useStyles = makeStyles((theme: Theme ) => createStyles({
  link: {
    color: theme.palette.text.primary,
    textDecoration: 'none',
  },
}));

interface NoteParams {
  node: any;
  to: string;
}

const NoteLink = (props: NoteParams) => {
  const { to } = props;
  const node = useFragment(fragment, props.node);
  const { link } = useStyles();
  return (
    <Link className={link} key={node.id} to={to}>
      <ListItem button>
        <ListItemText
          primary={<ReactMarkdown unwrapDisallowed source={node.title} />}
          secondary={new Date(node.updatedAt).toLocaleDateString()}
        />
      </ListItem>
    </Link>
  );
};

export default NoteLink;

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import ReactMarkdown from 'react-markdown';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from 'react-router-dom';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { useRouteMatch } from 'react-router-dom';

const fragment = graphql`
  fragment FolderNotes_folder on Folder
  @argumentDefinitions(
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    id
    notes(first: $count, after: $cursor)
      @connection(key: "FolderNotes_notes") {
      edges {
        node {
          id
          title
          updatedAt
        }
      }
    }
  }
`

const useStyles = makeStyles((theme: Theme ) => (
  createStyles({
    link: {
      color: theme.palette.text.primary,
      textDecoration: 'none'
    }
  })
));

const FolderNotes = (props: any) => {
  const { url } = useRouteMatch();
  let classes = useStyles();
  let [folder] = usePagination(fragment, props.folder)
  folder = folder || {};
  const { notes = {} } = folder;
  const { edges = [] } = notes;
  return (
    <List>
      {edges.map(({ node }: any) => (
        <Link className={classes.link} key={node.id} to={`${url}/notes/${node.id}`}>
          <ListItem button>
            <ListItemText
              primary={<ReactMarkdown unwrapDisallowed source={node.title} />}
              secondary={new Date(node.updatedAt).toLocaleDateString()}
            />
          </ListItem>
        </Link>
      ))}
    </List>
  )
};

export default FolderNotes;

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';

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
          content
          updatedAt
        }
      }
    }
  }
`

const FolderNotes = (props: any) => {
  let [folder] = usePagination(fragment, props.folder)
  folder = folder || {};
  const { notes = {} } = folder;
  const { edges = [] } = notes;
  return (
    <List>
      {edges.map(({ node }: any) => (
        <ListItem key={node.id} button>
          <ListItemText
            primary={node.id}
            secondary={new Date(node.updatedAt).toLocaleDateString()}
          />
        </ListItem>
      ))}
    </List>
  )
};

export default FolderNotes;

import List from '@material-ui/core/List';
import NoteLink from './NoteLink';
import React from 'react';
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
          ...NoteLink_node
        }
      }
    }
  }
`

const FolderNotes = (props: any) => {
  const { url } = useRouteMatch();
  let [folder] = usePagination(fragment, props.folder)
  folder = folder || {};
  const { notes = {} } = folder;
  const { edges = [] } = notes;
  return (
    <List>
      {edges.map(({ node }: any) => (
        <NoteLink
          key={node.id}
          node={node}
          to={`${url}/notes/${node.id}`}
        />
      ))}
    </List>
  )
};

export default FolderNotes;

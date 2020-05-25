import NoteLink from './NoteLink';
import List from '@material-ui/core/List';
import React from 'react';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';

const fragment = graphql`
  fragment SearchNotes_viewer on User
  @argumentDefinitions(
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    notes(first: $count, after: $cursor, query: $query)
      @connection(key: "SearchNotes_notes") {
      edges {
        node {
          id
          folderId
          ...NoteLink_node
        }
      }
    }
  }
`

const SearchNotes = (props: any) => {
  let [viewer] = usePagination(fragment, props.viewer);
  viewer = viewer || {};
  const { notes = {} } = viewer;
  const { edges = [] } = notes;
  return (
    <List>
      {edges.map(({ node }: any) => (
        <NoteLink
          key={node.id}
          node={node}
          to={`/folder/${node.folderId}/notes/${node.id}`}
        />
      ))}
    </List>
  )
};

export default SearchNotes;

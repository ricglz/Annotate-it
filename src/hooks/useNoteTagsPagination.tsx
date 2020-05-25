import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { useNoteTagsPagination_note as response } from './__generated__/useNoteTagsPagination_note.graphql';

const fragment = graphql`
  fragment useNoteTagsPagination_note on Note
  @argumentDefinitions (
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    id
    tags(first: $count, after: $cursor)
    @connection(key: "useNoteTagsPagination_tags") {
      edges {
        node {
          id
          name
        }
      }
    }
  }`;

function useNoteTagsPagination(props: any) {
  const answer = usePagination(fragment, props.note);
  const note = answer[0] as response;
  const { tags } = note;
  const { edges } = tags;
  return edges || [];
}

export default useNoteTagsPagination;

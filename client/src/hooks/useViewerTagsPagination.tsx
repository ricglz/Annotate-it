import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';
import { useViewerTagsPagination_viewer as response } from './__generated__/useViewerTagsPagination_viewer.graphql';

const fragment = graphql`
  fragment useViewerTagsPagination_viewer on User
  @argumentDefinitions (
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    id
    tags(first: $count, after: $cursor)
    @connection(key: "useViewerTagsPagination_tags") {
      edges {
        node {
          id
          name
        }
      }
    }
  }`;

function useViewerTagsPagination(props: any) {
  const answer = usePagination(fragment, props.viewer);
  const viewer = answer[0] as response;
  const { tags } = viewer;
  const { edges } = tags;
  return edges || [];
}

export default useViewerTagsPagination;

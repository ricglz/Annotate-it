import React from 'react';
import { graphql } from 'react-relay';
import { useQuery }  from 'relay-hooks';

const query = graphql`
  query ContentQuery {
    viewer {
      firstName
    }
  }
`

const variables = {};

const options = {
  networkCacheConfig: undefined,
}

function Content() {
  const { props, error } = useQuery(query, variables, options);
  if(props) {
    return <div>{props.viewer ? 'Logged' : 'Not logged'}</div>
  } if(error) {
    console.log(props);
    return <div>{error.message}</div>
  }
  return <div>Loading...</div>;
}

export default Content;

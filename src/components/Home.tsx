import React from 'react';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { useHistory } from "react-router-dom";

const query = graphql`
  query ContentQuery {
    viewer {
      firstName
    }
  }
`

function Home() {
  const { props, error } = useQuery(query);
  const history = useHistory()

  if(props) {
    const { viewer } = props;
    if(viewer) {
      return <div>{ viewer.firstName }</div>;
    }
    history.push('/login');
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
}

export default Home;

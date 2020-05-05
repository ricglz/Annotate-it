import React from 'react';
import { graphql } from 'react-relay';
import { useQuery } from 'relay-hooks';
import { useHistory } from "react-router-dom";

const query = graphql`
  query HomeQuery {
    viewer {
      id
      firstName
    }
  }
`

function Home() {
  const { props, error } = useQuery(query);
  const history = useHistory()

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      if(props && !props.viewer) {
        history.push('/login')
      }
    });

    return () => clearTimeout(timeOut);
  }, [history, props]);

  if(props) {
    const { viewer } = props;
    if(viewer) {
      return <div>{ viewer.firstName }</div>;
    }
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
}

export default Home;

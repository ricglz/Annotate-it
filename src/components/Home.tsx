import Loader from './Loader';
import React from 'react';
import loadable from "@loadable/component";
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useHistory } from "react-router-dom";
import { useQuery } from 'relay-hooks';

const HomeContent = loadable(() => import('./HomeContent'), {
  fallback: <Loader />
});

const query = graphql`
  query HomeQuery {
    viewer {
      ...HomeContent_viewer
    }
  }
`

function Home() {
  const { user } = React.useContext(UserContext);
  const history = useHistory();
  if(!(user as any).email) {
    history.push('/login');
  }
  const { props, error } = useQuery(query, {  });

  if(props) {
    return <HomeContent viewer={props.viewer} />
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <Loader />;
}

export default Home;

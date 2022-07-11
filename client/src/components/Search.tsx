import Loader from './Loader';
import React from 'react';
import SearchNotes from './SearchNotes';
import { graphql } from 'react-relay';
import { useParams } from 'react-router-dom';
import { useQuery } from 'relay-hooks';

const actualQuery = graphql`
  query SearchQuery($query: String!) {
    viewer {
      ...SearchNotes_viewer
    }
  }
`

const Search = () => {
  const { query } = useParams();
  const { props, error } = useQuery(actualQuery, { query });
  if(props) {
    const { viewer = {} } = props;
    return (
      <SearchNotes viewer={viewer}/>
    );
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <Loader />;
};

export default Search;

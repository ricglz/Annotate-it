import Loader from './Loader';
import React from 'react'
import loadable from "@loadable/component";
import { graphql } from 'react-relay';
import { useParams } from 'react-router-dom';
import { useQuery } from 'relay-hooks';

const FolderContent = loadable(() => import('./FolderContent'), {
  fallback: <Loader />
});

const query = graphql`
  query FolderDetailsQuery($folderId: ID!) {
    viewer {
      folder(id: $folderId) {
        id
        name
        ...FolderNotes_folder
      }
    }
  }
`;

const FolderDetails = () => {
  const { folderId } = useParams();
  const { props, error } = useQuery(query, { folderId });
  if(props) {
    const { viewer = {} } = props;
    const { folder = {} } = viewer;
    return (
      <FolderContent folder={folder}/>
    );
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <Loader />;
}

export default FolderDetails;

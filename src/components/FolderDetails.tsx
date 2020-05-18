import Divider from '@material-ui/core/Divider';
import FolderHeader from './FolderHeader';
import FolderNotes from './FolderNotes';
import React from 'react'
import { graphql } from 'react-relay';
import { useParams } from 'react-router-dom';
import { useQuery } from 'relay-hooks';

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
`

const FolderDetails = () => {
  const { folderId } = useParams();
  const { props, error } = useQuery(query, { folderId });
  if(props) {
    const { viewer = {} } = props;
    const { folder = {} } = viewer;
    return (
      <>
        <FolderHeader folder={folder} />
        <Divider />
        <FolderNotes folder={folder}/>
      </>
    );
  }
  if(error) {
    return <div>{ error.message }</div>;
  }
  return <div>Loading...</div>;
}

export default FolderDetails;

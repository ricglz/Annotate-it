import Divider from '@material-ui/core/Divider';
import FolderHeader from './FolderHeader';
import FolderNotes from './FolderNotes';
import React from 'react';

const FolderContent = ({ folder }: any) => (
  <>
    <FolderHeader folder={folder} />
    <Divider />
    <FolderNotes folder={folder}/>
  </>
);

export default FolderContent;

import HomeDrawerDialogForm from './HomeDrawerDialogForm';
import React from 'react';
import useRenameFolderMutation from '../mutations/useRenameFolderMutation';

interface Folder {
  id: string;
  name: string;
}

interface Props {
  folder: Folder;
  open: boolean;
  toogle: (e: any) => void;
}

const HomeDrawerEditDialog = ({ folder, open, toogle }: Props) => {
  const [
    onClick, { loading, name, onChange }
  ] = useRenameFolderMutation(folder, toogle);
  return (
    <HomeDrawerDialogForm
      identifier="edit-folder-dialog"
      label="Update"
      loading={loading}
      loadingLabel="Updating..."
      name={name}
      onChange={onChange}
      onClick={onClick}
      open={open}
      toogle={toogle}
    />
  )
}

export default HomeDrawerEditDialog;

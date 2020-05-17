import HomeDrawerDialogForm from './HomeDrawerDialogForm';
import React from 'react';
import useCreateFolderMutation from '../mutations/useCreateFolderMutation';

interface Props {
  open: boolean;
  toogle: (e: any) => void;
}

const HomeDrawerCreateDialog = ({ open, toogle }: Props) => {
  const [
    onClick, { loading, name, onChange }
  ] = useCreateFolderMutation(toogle);
  return (
    <HomeDrawerDialogForm
      identifier="create-folder-dialog"
      label="Create"
      loading={loading}
      loadingLabel="Creating..."
      name={name}
      onChange={onChange}
      onClick={onClick}
      open={open}
      toogle={toogle}
    />
  )
}

export default HomeDrawerCreateDialog;

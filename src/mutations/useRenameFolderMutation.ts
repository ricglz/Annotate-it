import useOnErrorMutationAlert from '../hooks/useOnErrorMutationAlert';
import useTextField from '../hooks/useTextField';
import { graphql } from 'react-relay';
import { ChangeEvent, useCallback } from 'react';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useRenameFolderMutation($input: RenameFolderInput!) {
    renameFolder(input: $input) {
      folder {
        id
        name
      }
    }
  }
`

interface MutationObject {
  loading: boolean;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

type callback = [() => void, MutationObject]

interface Folder {
  id: string;
  name: string;
}

function useMutationRequisites({ id, ...rest }: Folder) {
  const [name, onChange] = useTextField(rest.name);

  const optimisticResponse = {
    renameFolder: {
      folder: {
        id,
        name
      }
    }
  };

  return { name, onChange, optimisticResponse };
}

function useRenameFolderMutation(
  folder: Folder, onCompleted: (e: any) => void
): callback {
  const { name, onChange, optimisticResponse } = useMutationRequisites(folder);
  const onError = useOnErrorMutationAlert();

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, onError, optimisticResponse }
  );

  const onClick = useCallback(() => {
    mutate({ variables: { input: { name, folderId: folder.id } } })
  }, [folder, mutate, name])
  return [onClick, { loading, name, onChange }];
}

export default useRenameFolderMutation;

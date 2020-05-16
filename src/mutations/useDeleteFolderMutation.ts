import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useCallback, useContext  } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useDeleteFolderMutation($input: DeleteFolderInput!) {
    deleteFolder(input: $input) {
      deletedFolderId
    }
  }
`

interface MutationObject {
  loading: boolean;
}

type callback = [() => void, MutationObject]

function useMutationRequisites() {
  const history = useHistory();
  const { email, id } = (useContext(UserContext) as any).user;
  const { folderId } = useParams();

  const onCompleted = useCallback(() => {
    history.push(`/`);
  }, [history]);
  const optimisticResponse = { deleteFolder: { deletedFolderId: folderId } };
  const configs = [{
    connectionKeys: [{ key: 'HomeDrawer_folders' }],
    deletedIDFieldName: 'deletedFolderId',
    parentID: id,
    pathToConnection: ['viewer', 'folders'],
    type: 'RANGE_DELETE',
  }];

  return { folderId, email, onCompleted, optimisticResponse, configs };
}

function useDeleteFolderMutation(): callback {
  const {
    folderId, email, onCompleted, optimisticResponse, configs
  } = useMutationRequisites();

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, optimisticResponse, configs: (configs as any) }
  );
  const onClick = useCallback(() => {
    mutate({ variables: { input: { email, folderId } } })
  }, [email, mutate, folderId]);

  return [onClick, { loading }];
}

export default useDeleteFolderMutation;

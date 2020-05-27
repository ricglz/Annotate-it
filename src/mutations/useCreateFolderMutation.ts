import useOnErrorMutationAlert from '../hooks/useOnErrorMutationAlert';
import useTextField from '../hooks/useTextField';
import { ChangeEvent, useCallback, useContext } from 'react';
import { ConnectionHandler } from 'relay-runtime';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useCreateFolderMutationVariables as Variables } from './__generated__/useCreateFolderMutation.graphql';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useCreateFolderMutation($input: CreateFolderInput!) {
    createFolder(input: $input) {
      edge {
        node {
          id
          name
        }
      }
    }
  }
`

interface MutationObject {
  name: string;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

type callback = [() => void, MutationObject]

function sharedUpdater({ store, id, edge }: any) {
  const userProxy = store.get(id);

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'HomeDrawer_folders',
  );
  if (connection) {
    ConnectionHandler.insertEdgeAfter(connection, edge);
  }
}

function useMutationRequisites() {
  const { id } = (useContext(UserContext) as any).user;

  const updater = (store: any) => {
    const payload = store.getRootField('createFolder');
    const edge = payload.getLinkedRecord('edge')
    sharedUpdater({ store, id, edge});
  }
  const configs: any = [{
    connectionInfo: [{
      key: 'HomeDrawer_folders',
      rangeBehavior: 'append',
    }],
    edgeName: 'edge',
    parentID: id,
    type: 'RANGE_ADD',
  }];

  return { updater, configs };
}

function useCreateFolderMutation(onCompleted: (e: any) => void): callback {
  const { configs } = useMutationRequisites();
  const [name, onChange] = useTextField();
  const onError = useOnErrorMutationAlert();

  const [mutate, { loading }] = useMutation(
    mutation, { configs, onCompleted, onError }
  );
  const variables = { input: { name } } as Variables;
  const onClick = useCallback(() => {
    mutate({ variables })
  }, [mutate, variables]);

  return [onClick, { loading, name, onChange }];
}

export default useCreateFolderMutation;

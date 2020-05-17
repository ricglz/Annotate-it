import useTextField from '../hooks/useTextField';
import { ChangeEvent, useCallback, useContext } from 'react';
import { ConnectionHandler } from 'relay-runtime';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useCreateNoteMutation($input: CreateNoteInput!) {
    createNote(input: $input) {
      edge {
        node {
          id
        }
      }
    }
  }
`

interface MutationObject {
  content: string;
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

type callback = [() => void, MutationObject]

function sharedUpdater({ store, id, edge }: any) {
  const userProxy = store.get(id);

  const connection = ConnectionHandler.getConnection(
    userProxy,
    'FolderNotes_notes',
  );
  if (connection) {
    console.log('hi');
    ConnectionHandler.insertEdgeBefore(connection, edge);
  }
}

function useMutationRequisites() {
  const history = useHistory();
  const { folderId } = useParams();

  const onCompleted = useCallback(() => {
    history.push(`/folder/${folderId}`);
  }, [folderId, history]);
  const updater = (store: any) => {
    const payload = store.getRootField('createNote');
    const edge = payload.getLinkedRecord('edge')
    sharedUpdater({ store, id: folderId, edge});
  }

  return { folderId, onCompleted, updater };
}

function useCreateNoteMutation(): callback {
  const { folderId, onCompleted, updater } = useMutationRequisites();
  const { email } = (useContext(UserContext) as any).user;
  const [content, onChange] = useTextField('');

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, updater }
  );
  const onClick = useCallback(() => {
    mutate({ variables: { input: { email, folderId, content } } })
  }, [email, mutate, folderId, content]);

  return [onClick, { loading, content, onChange }];
}

export default useCreateNoteMutation;

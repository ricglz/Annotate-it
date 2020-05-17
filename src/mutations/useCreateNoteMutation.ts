import useTextField from '../hooks/useTextField';
import { ChangeEvent, useCallback, useContext } from 'react';
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

function useMutationRequisites() {
  const history = useHistory();
  const { folderId } = useParams();

  const onCompleted = useCallback(() => {
    history.push(`/folder/${folderId}`);
  }, [folderId, history]);
  const configs = [{
    connectionInfo: [{
      key: 'FolderNotes_notes',
      rangeBehavior: 'prepend'
    }],
    edgeName: 'edge',
    parentID: folderId,
    type: 'RANGE_ADD',
  }];

  return { configs, folderId, onCompleted};
}

function useCreateNoteMutation(): callback {
  const { folderId, onCompleted, configs } = useMutationRequisites();
  const { email } = (useContext(UserContext) as any).user;
  const [content, onChange] = useTextField('');

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, configs: (configs as any) }
  );
  const onClick = useCallback(() => {
    mutate({ variables: { input: { email, folderId, content } } })
  }, [email, mutate, folderId, content]);

  return [onClick, { loading, content, onChange }];
}

export default useCreateNoteMutation;

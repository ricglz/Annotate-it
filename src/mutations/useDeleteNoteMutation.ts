import { graphql } from 'react-relay';
import { useCallback  } from 'react';
import { useDeleteNoteMutationVariables as Variables } from './__generated__/useDeleteNoteMutation.graphql';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useDeleteNoteMutation($input: DeleteNoteInput!) {
    deleteNote(input: $input) {
      deletedNoteId
    }
  }
`

interface MutationObject {
  loading: boolean;
}

type callback = [() => void, MutationObject]

function useMutationRequisites() {
  const history = useHistory();
  const { noteId, folderId } = useParams();

  const onCompleted = useCallback(() => {
    history.push(`/folder/${folderId}`);
  }, [folderId, history]);
  const optimisticResponse = { deleteNote: { deletedNoteId: noteId } };
  const configs = [{
    connectionKeys: [{ key: 'FolderNotes_notes' }],
    deletedIDFieldName: 'deletedNoteId',
    parentID: folderId,
    pathToConnection: ['viewer', 'folder'],
    type: 'RANGE_DELETE',
  }];

  return { noteId, onCompleted, optimisticResponse, configs };
}

function useDeleteNoteMutation(): callback {
  const { noteId, onCompleted, optimisticResponse, configs } = useMutationRequisites();

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, optimisticResponse, configs: (configs as any) }
  );
  const variables = { input: { noteId } } as Variables;
  const onClick = useCallback(() => {
    mutate({ variables })
  }, [mutate, variables]);

  return [onClick, { loading }];
}

export default useDeleteNoteMutation;

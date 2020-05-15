import useTextField from '../hooks/useTextField';
import { UserContext } from '../contexts/UserContext';
import { graphql } from 'react-relay';
import { ChangeEvent, useCallback, useContext  } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation } from 'relay-hooks';

const mutation = graphql`
  mutation useUpdateNotesContentMutation(
    $input: UpdateNoteContentInput!
  ) {
    updateNoteContent(input: $input) {
      updatedNote {
        id
        content
      }
    }
  }
`

interface MutationObject {
  loading: boolean;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  text: string;
}

type callback = [() => void, MutationObject]

function useMutationRequisites(content: string) {
  const [text, onChange] = useTextField(content);
  const history = useHistory();
  const { noteId, folderId } = useParams();

  const onCompleted = useCallback(() => {
    history.push(`/folder/${folderId}/notes/${noteId}`);
  }, [folderId, history, noteId]);
  const optimisticResponse = {
    updateNoteContent: {
      updatedNote: {
        id: noteId,
        content: text,
      }
    }
  };

  return { text, onChange, noteId, onCompleted, optimisticResponse };
}

function useUpdateNotesContentMutation(content: string): callback {
  const {
    noteId, onChange, onCompleted, optimisticResponse, text
  } = useMutationRequisites(content);
  const { email } = (useContext(UserContext) as any).user;

  const [mutate, { loading }] = useMutation(
    mutation, { onCompleted, optimisticResponse }
  );

  const onClick = useCallback(() => {
    mutate({ variables: { input: { content: text, email, noteId } } })
  }, [text, email, mutate, noteId])
  return [onClick, { loading, onChange, text }];
}

export default useUpdateNotesContentMutation;

import {
  ConnectionHandler,
  RecordSourceSelectorProxy
} from 'relay-runtime';
import { graphql } from 'react-relay';
import { useMutation } from 'relay-hooks';
import { useParams } from 'react-router-dom';
import { useCallback } from 'react';

const mutation = graphql`
  mutation useTagNoteMutation($input: TagNoteInput!) {
    tagNote(input: $input) {
      tags {
        node {
          id
          name
        }
      }
    }
  }
`;

function getUpdater(noteId: string) {
  return (store: RecordSourceSelectorProxy) => {
    const tags = store.getRootField('tagNote')
                      ?.getLinkedRecords('tags');
    if(!tags) {
      return;
    }
    const note = store.get(noteId);
    if(!note) {
      return;
    }
    const connection = ConnectionHandler.getConnection(
      note,
      'useNoteTagsPagination_tags'
    );
    if(!connection) {
      return;
    }
    connection.setLinkedRecords(tags, 'edges');
  }
}

function useMutationRequisites() {
  const { noteId } = useParams();
  const updater = getUpdater(noteId);
  return { noteId, updater };
}

function useTagNoteMutation() {
  const { noteId, updater } = useMutationRequisites();
  const [mutate] = useMutation(mutation, { updater });
  const tagNote = useCallback((tags: Array<string>) => {
    const variables = { input: { noteId, tags } } as any;
    mutate({ variables });
  }, [mutate, noteId]);
  return tagNote;
}

export default useTagNoteMutation;

import React from 'react';
import Select from 'react-select/creatable';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useNoteTagsPagination from '../hooks/useNoteTagsPagination';
import useViewerTagsPagination from '../hooks/useViewerTagsPagination';
import useCreateTagMutation from '../mutations/useCreateTagMutation';
import useTagNoteMutation from '../mutations/useTagNoteMutation';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme ) => createStyles({
  root: {
    color: 'black',
    margin: theme.spacing(2, 0),
  },
}));

interface Props {
  note: any;
  viewer: any;
}

type option = { value: string, label: string };

const nodeToOption = (
  ({ node }: any): option => ({ value: node.id, label: node.name })
);

function useSelect(props: Props) {
  const initial = useViewerTagsPagination(props).map(nodeToOption);
  const [options, setOptions] = React.useState(initial);
  const selected = useNoteTagsPagination(props).map(nodeToOption);
  const createTag = useCreateTagMutation();
  const tagNote = useTagNoteMutation();
  const onCreate = React.useCallback((newValue: option) => {
    const { label } = newValue;
    const variables = { input: { name: label } };
    setOptions((prev) => [...prev, newValue]);
    createTag(variables);
  }, [createTag])
  const onChange = React.useCallback((values: Array<option>, { action }: any) => {
    if(action === 'create-option') {
      const newValue = values[values.length - 1];
      onCreate(newValue);
    }
    tagNote(values.map(({ value }) => value));
  }, [onCreate, tagNote])
  return [selected, options, onChange];
}

const SelectNoteTags = (props: Props) => {
  const { root } = useStyles();
  const [selected, options, onChange] = useSelect(props);
  return (
    <Select
      className={root}
      defaultValue={selected as any}
      isMulti
      name="tags"
      onChange={onChange as any}
      options={options as any}
    />
  );
};

export default SelectNoteTags;

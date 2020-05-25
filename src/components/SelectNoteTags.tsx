import React from 'react';
import Select from 'react-select/creatable';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useNoteTagsPagination from '../hooks/useNoteTagsPagination';
import useViewerTagsPagination from '../hooks/useViewerTagsPagination';
import useCreateTagMutation from '../mutations/useCreateTagMutation';
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

const nodeToOption = ({ node }: any) => ({ value: node.id, label: node.name });

function useSelect(props: Props) {
  const selected = useNoteTagsPagination(props).map(nodeToOption);
  const options = useViewerTagsPagination(props).map(nodeToOption);
  const createTag = useCreateTagMutation();
  const onChange = React.useCallback((values: any, { action }: any) => {
    const { label } = values[values.length - 1];
    if(action === 'create-option') {
      const variables = { input: { name: label } };
      createTag(variables);
    }
  }, [createTag])
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

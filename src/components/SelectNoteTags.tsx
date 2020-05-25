import React from 'react';
import Select from 'react-select';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { graphql } from 'react-relay';
import { usePagination } from 'relay-hooks';

const fragment = graphql`
  fragment SelectNoteTags_note on Note
  @argumentDefinitions (
    count: {type: "Int", defaultValue: 10}
    cursor: {type: "String"}
  ) {
    id
    tags(first: $count, after: $cursor)
    @connection(key: "SelectNoteTags_tags") {
      edges {
        node {
          id
          name
        }
      }
    }
  }`;

const useStyles = makeStyles((_: Theme ) => createStyles({
  root: {
    color: 'black',
  },
}));

interface Props {
  note: any;
}

const SelectNoteTags = (props: Props) => {
  const { root } = useStyles();
  let [note] = usePagination(fragment, props.note);
  note = note || {};
  const { tags = {} } = note;
  const { edges = [] } = tags;
  const options = edges.map(
    ({ node }: any) => ({ value: node.id, label: node.name })
  );
  return (
    <Select
      className={root}
      isMulti
      name="tags"
      options={options}
    />
  );
};

export default SelectNoteTags;

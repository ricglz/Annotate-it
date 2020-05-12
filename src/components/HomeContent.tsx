import HomeAppBar from './HomeAppBar';
import HomeDrawer from './HomeDrawer';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { HomeContent_viewer } from './__generated__/HomeContent_viewer.graphql'
import { graphql } from 'react-relay';
import { useFragment, KeyType } from 'relay-hooks';

const fragment = graphql`
  fragment HomeContent_viewer on User {
    id
    ...HomeDrawer_viewer
  }
`

interface Props {
  viewer: HomeContent_viewer;
}

const HomeContent = (props: Props) => {
  const viewer = useFragment(fragment, props.viewer as KeyType) as HomeContent_viewer;
  return (
    <>
      <HomeAppBar />
      <HomeDrawer viewer={viewer} />
      <Typography variant="h5">{viewer.id}</Typography>
    </>
  );
}

export default HomeContent;

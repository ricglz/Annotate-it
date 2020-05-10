import React from 'react';
import { graphql } from 'react-relay';
import { useFragment, KeyType } from 'relay-hooks';
import { HomeContent_viewer } from './__generated__/HomeContent_viewer.graphql'
import HomeAppBar from './HomeAppBar';

const fragment = graphql`
  fragment HomeContent_viewer on User {
    id
  }
`

interface Props {
  viewer: HomeContent_viewer;
}

const HomeContent = (props: Props) => {
  const viewer = useFragment(fragment, props.viewer as KeyType) as HomeContent_viewer;
  return (
    <HomeAppBar />
  );
}

export default HomeContent;

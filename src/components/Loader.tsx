import MoonLoader from 'react-spinners/MoonLoader';
import React from 'react';

const css = `
  left: 50%;
  position: fixed;
  top: 45%;
  z-index: 2000;
`

const Loader = () => (
  <MoonLoader
    color="#ADD8E6"
    css={css}
    loading
  />
);

export default React.memo(Loader);

import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height="100"
      width="100"
      display="flex"
      color="grey"
      ariaLabel="loading"
    />
  );
};

export default Loader;

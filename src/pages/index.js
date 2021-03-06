import React, { Fragment } from 'react';

import IndexScreen from '../components/screens/IndexScreen/IndexScreen';
import { GlobalStyle } from '../components/basics/shared/global';

// In theory we could pass in props that we'd fetched via Gatsby's GraphQL
export default () => (
  <Fragment>
    <GlobalStyle />
    <IndexScreen />
  </Fragment>
);

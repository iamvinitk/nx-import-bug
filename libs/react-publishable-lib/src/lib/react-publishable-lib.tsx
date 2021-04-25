import React from 'react';
import { lib2 } from '@my-org/lib2';

/* eslint-disable-next-line */
export interface ReactPublishableLibProps {}

export function ReactPublishableLib(props: ReactPublishableLibProps) {
  return (
    <div>
      <h1>{lib2()}</h1>
    </div>
  );
}

export default ReactPublishableLib;

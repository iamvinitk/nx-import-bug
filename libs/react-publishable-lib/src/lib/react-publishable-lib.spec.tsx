import { render } from '@testing-library/react';

import ReactPublishableLib from './react-publishable-lib';

describe('ReactPublishableLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactPublishableLib />);
    expect(baseElement).toBeTruthy();
  });
});

import React from 'react';
import {render} from '@testing-library/react-native';
import Hello from '../Hello';

describe('Hello', () => {
  it('displays the passed-in name', () => {
    const {queryByText} = render(<Hello name="Josh" />);
    expect(queryByText('Hello, Josh!')).not.toBeNull();
  });
});

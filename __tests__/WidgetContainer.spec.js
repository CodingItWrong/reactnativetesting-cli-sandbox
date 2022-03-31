import React from 'react';
import {render} from '@testing-library/react-native';
import WidgetContainer from '../WidgetContainer';
import api from '../api';

jest.mock('../api');

describe('WidgetContainer', () => {
  it('loads widgets upon mount', async () => {
    api.get.mockResolvedValue({
      data: [
        {id: 1, name: 'Widget 1'},
        {id: 2, name: 'Widget 2'},
      ],
    });

    const {findByText, queryByText} = render(<WidgetContainer />);

    await findByText('Widget 1');
    expect(queryByText('Widget 2')).not.toBeNull();
  });
});

import { render } from '@testing-library/react';

import SmallIslandTravellerChatBot from './small-island-traveller-chat-bot';

describe('SmallIslandTravellerChatBot', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerChatBot />);
    expect(baseElement).toBeTruthy();
  });
});

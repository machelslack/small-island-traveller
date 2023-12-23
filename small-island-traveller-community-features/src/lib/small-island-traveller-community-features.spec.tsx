import { render } from '@testing-library/react';

import SmallIslandTravellerCommunityFeatures from './small-island-traveller-community-features';

describe('SmallIslandTravellerCommunityFeatures', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerCommunityFeatures />);
    expect(baseElement).toBeTruthy();
  });
});

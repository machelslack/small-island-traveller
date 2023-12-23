import { render } from '@testing-library/react';

import SmallIslandTravellerUserProfileManager from './small-island-traveller-user-profile-manager';

describe('SmallIslandTravellerUserProfileManager', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerUserProfileManager />);
    expect(baseElement).toBeTruthy();
  });
});

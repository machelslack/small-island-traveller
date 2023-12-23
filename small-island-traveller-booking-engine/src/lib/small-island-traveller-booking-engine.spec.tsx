import { render } from '@testing-library/react';

import SmallIslandTravellerBookingEngine from './small-island-traveller-booking-engine';

describe('SmallIslandTravellerBookingEngine', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerBookingEngine />);
    expect(baseElement).toBeTruthy();
  });
});

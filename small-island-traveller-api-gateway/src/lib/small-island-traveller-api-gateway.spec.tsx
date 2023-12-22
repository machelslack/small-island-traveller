import { render } from '@testing-library/react';

import SmallIslandTravellerApiGateway from './small-island-traveller-api-gateway';

describe('SmallIslandTravellerApiGateway', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerApiGateway />);
    expect(baseElement).toBeTruthy();
  });
});

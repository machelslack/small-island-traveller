import { render } from '@testing-library/react';

import SmallIslandTravellerComponentLibrary from './small-island-traveller-component-library';

describe('SmallIslandTravellerComponentLibrary', () => {
  
  it('should render successfully', () => {
    const { baseElement } = render(<SmallIslandTravellerComponentLibrary />);
    expect(baseElement).toBeTruthy();
  });
  
});

import { smallIslandTravellerApiGateway } from './small-island-traveller-api-gateway';

describe('smallIslandTravellerApiGateway', () => {
  it('should work', () => {
    expect(smallIslandTravellerApiGateway()).toEqual(
      'small-island-traveller-api-gateway'
    );
  });
});

import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SmallIslandTravellerBookingEngineProps {}

const StyledSmallIslandTravellerBookingEngine = styled.div`
  color: pink;
`;

export function SmallIslandTravellerBookingEngine(
  props: SmallIslandTravellerBookingEngineProps
) {
  return (
    <StyledSmallIslandTravellerBookingEngine>
      <h1>Welcome to SmallIslandTravellerBookingEngine!</h1>
    </StyledSmallIslandTravellerBookingEngine>
  );
}

export default SmallIslandTravellerBookingEngine;

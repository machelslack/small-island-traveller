import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SmallIslandTravellerUserProfileManagerProps {}

const StyledSmallIslandTravellerUserProfileManager = styled.div`
  color: pink;
`;

export function SmallIslandTravellerUserProfileManager(
  props: SmallIslandTravellerUserProfileManagerProps
) {
  return (
    <StyledSmallIslandTravellerUserProfileManager>
      <h1>Welcome to SmallIslandTravellerUserProfileManager!</h1>
    </StyledSmallIslandTravellerUserProfileManager>
  );
}

export default SmallIslandTravellerUserProfileManager;

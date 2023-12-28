import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface SmallIslandTravellerChatBotProps {}

const StyledSmallIslandTravellerChatBot = styled.div`
  color: pink;
`;

export function SmallIslandTravellerChatBot(
  props: SmallIslandTravellerChatBotProps
) {
  return (
    <StyledSmallIslandTravellerChatBot>
      <h1>Welcome to SmallIslandTravellerChatBot!</h1>
    </StyledSmallIslandTravellerChatBot>
  );
}

export default SmallIslandTravellerChatBot;

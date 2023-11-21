import { FriendItem, FriendName, FriendStatus } from './FriendListItem.styled';

export const FriendListItem = ({ friend: { isOnline, avatar, name } }) => {
  return (
    <FriendItem>
      <FriendStatus $status={isOnline}>{isOnline}</FriendStatus>
      <img src={avatar} alt={name} width="100" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

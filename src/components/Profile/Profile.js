import {
  ProfileWrapper,
  ProfileImage,
  ProfileInfo,
  ProfileList,
  ProfileListItem,
} from './Profile.styled';

export const Profile = ({ user }) => {
  return (
    <ProfileWrapper>
      <ProfileImage src={user.avatar} alt={user.username} width="100" />
      <h2 align="center">{user.username}</h2>
      <ProfileInfo>@{user.tag}</ProfileInfo>
      <ProfileInfo>{user.location}</ProfileInfo>
      <ProfileList>
        <ProfileListItem>
          <span>Followers</span>
          <span>
            <b>{user.stats.followers}</b>
          </span>
        </ProfileListItem>
        <ProfileListItem>
          <span>Views</span>
          <span>
            <b>{user.stats.views}</b>
          </span>
        </ProfileListItem>
        <ProfileListItem>
          <span>Likes</span>
          <span>
            <b>{user.stats.likes}</b>
          </span>
        </ProfileListItem>
      </ProfileList>
    </ProfileWrapper>
  );
};

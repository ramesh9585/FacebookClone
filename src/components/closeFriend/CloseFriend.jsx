import "./closeFriend.css";

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
          <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
          <span className="sidebarFriendNme">{user.username}</span>
         </li>
  );
}

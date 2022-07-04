import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./index.css";
import "./profile.css";
function My_profile() {
  const user = useSelector((state) => state.user.value);
  return (
    <body id="profile">
      <h1>Your Profile-!</h1>
      <p>{user.name}</p>
      <p>{user.age}</p>
      <p>{user.favorites}</p>
      <p>{user.major}</p>
      <div>
        <Link to="/my_profile">
          <button id="button">return</button>
        </Link>
      </div>
    </body>
  );
} // 문제없음

export default My_profile;

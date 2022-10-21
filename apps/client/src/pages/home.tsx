import { MyPage } from "$core/@types";
import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { id, resetToken, username } = useUser();

  return (
    <div>
      <p>
        Hello {username}, your id is {id}
      </p>
      <button onClick={() => resetToken()}>Logout</button>
    </div>
  );
};

HomePage.authStatus = "private";

export default HomePage;

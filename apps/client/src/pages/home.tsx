import { MyPage } from "@types";

import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { id, resetToken, username } = useUser();

  return (
    <div>
      Hello {username}, your id is {id}
      <button onClick={() => resetToken()}>Logout</button>
    </div>
  );
};

HomePage.authStatus = "private";

export default HomePage;

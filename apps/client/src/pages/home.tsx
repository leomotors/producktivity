import { MyPage } from "@types";

import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { id, username } = useUser();

  return (
    <div>
      Hello {username}, your id is {id}
    </div>
  );
};

HomePage.authStatus = "private";

export default HomePage;

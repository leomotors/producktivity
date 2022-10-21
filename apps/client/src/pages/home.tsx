import { Button } from "@producktivity/design";

import { MyPage } from "$core/@types";
import { useUser } from "$modules/authentication";

const HomePage: MyPage = () => {
  const { id, resetToken, username } = useUser();

  return (
    <div>
      <p>
        Hello {username}, your id is {id}
      </p>
      <Button variant="primary" onClick={() => resetToken()}>
        Logout
      </Button>
    </div>
  );
};

HomePage.authStatus = "private";

export default HomePage;

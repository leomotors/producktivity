import { useState } from "react";

import { MyPage } from "$core/@types";
import { ExtLink } from "$core/components";
import { Login, Register, useUser } from "$modules/authentication";
import styles from "$styles/Index.module.scss";

const IndexPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const { setToken } = useUser();

  function onComplete(token: string) {
    setToken(token);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-blue-600">Producktivity</h1>

      <p className="text-4xl font-bold">For ducks who want to be productive</p>

      <p className="text-2xl font-bold">
        Pomodoro, tasks, events, habits, schedule, all-in-one app.
      </p>

      <section className="my-8 flex flex-col gap-4">
        <input
          className="rounded-lg border border-gray-500 p-2"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value.toLowerCase())}
        />

        <div className="flex justify-center gap-4">
          <Login username={username} onComplete={onComplete} />
          <Register username={username} onComplete={onComplete} />
        </div>
      </section>

      <p>
        Feeling not productive?{" "}
        <ExtLink
          className="text-blue-600"
          href="https://nacnano.github.io/cugetrekt/frontend/"
        >
          Check this out
        </ExtLink>
      </p>

      <p className={styles.linkTree}>
        <ExtLink href="https://github.com/Leomotors/producktivity">
          GitHub
        </ExtLink>{" "}
        | <ExtLink href="https://www.brikl.com/jobs">Jobs</ExtLink> |{" "}
        <ExtLink href="https://cutebutnotcunny.blob.core.windows.net/machikado/machikado-op-2.webm">
          ???
        </ExtLink>
      </p>
    </div>
  );
};

IndexPage.authStatus = "redirect";

export default IndexPage;

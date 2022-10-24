import { useState } from "react";

import { ThemeSwitcher } from "@producktivity/design";

import { MyPage } from "$core/@types";
import { ExtLink } from "$core/components";
import { Login, Register, useUser } from "$modules/authentication";
import styles from "$styles/Index.module.scss";

const IndexPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const { setToken } = useUser();

  const [error, setError] = useState("");

  function onComplete(token: string) {
    setToken(token);
  }

  return (
    <main className="flex h-screen flex-col items-center justify-center gap-4 transition-colors dark:bg-slate-900 dark:text-white p-8 text-center">
      <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-500">
        Producktivity
      </h1>

      <p className="text-4xl font-bold">For ducks who want to be productive</p>

      <p className="text-2xl font-bold">
        Pomodoro, tasks, events, habits, schedule, all-in-one app.
      </p>

      <section className="my-8 flex flex-col gap-4 items-center">
        {error && (
          <div className="border border-red-500 bg-red-300 p-4 rounded-lg text-black">
            {error}
          </div>
        )}

        <input
          className="rounded-lg border border-gray-500 p-2 w-56 text-black"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value.toLowerCase())}
        />

        <div className="flex justify-center gap-4">
          <Login
            username={username}
            onComplete={onComplete}
            onError={setError}
          />
          <Register
            username={username}
            onComplete={onComplete}
            onError={setError}
          />
        </div>
      </section>

      <p>
        Feeling not productive?{" "}
        <ExtLink
          className="text-blue-600 dark:text-blue-400"
          href="https://cugetrekt.vercel.app"
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

      <ThemeSwitcher />
    </main>
  );
};

IndexPage.authStatus = "redirect";

export default IndexPage;

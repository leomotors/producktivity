import { useState } from "react";

import { authorizationLocalStorageKey } from "@producktivity/constants";
import { MyPage } from "@types";

import { Login, Register } from "$modules/authentication";

const IndexPage: MyPage = () => {
  const [username, setUsername] = useState("");
  const [temp, setTemp] = useState("NONE");

  function onComplete() {
    setTemp(localStorage.getItem(authorizationLocalStorageKey) ?? "NULL");
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-6xl font-bold text-blue-600">Producktivity</h1>

      <p className="text-xl font-bold">The ducks that wants to be productive</p>

      <p className="text-2xl font-bold">
        Pomodoro, Tasks, Events, Schedule, All-In-One App
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

      <p>token is {temp}</p>
    </div>
  );
};

IndexPage.authStatus = "redirect";

export default IndexPage;

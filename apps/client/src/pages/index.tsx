import { useState } from "react";

import { authorizationLocalStorageKey } from "@producktivity/constants";

import { Login, Register } from "$modules/authentication";

export default function Web() {
  const [username, setUsername] = useState("");
  const [temp, setTemp] = useState("NONE");

  function onComplete() {
    setTemp(localStorage.getItem(authorizationLocalStorageKey) ?? "NULL");
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1>Producktivity</h1>

      <h2>Login and Register</h2>
      <input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.currentTarget.value.toLowerCase())}
      />

      <div className="flex justify-center gap-4">
        <Login username={username} onComplete={onComplete} />
        <Register username={username} onComplete={onComplete} />
      </div>

      <p>token is {temp}</p>
    </div>
  );
}

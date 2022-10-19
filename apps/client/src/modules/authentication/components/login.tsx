import { FC, useCallback } from "react";

import {
  useRequestLoginMutation,
  useVerifyLoginMutation,
} from "@producktivity/codegen";
import { authorizationLocalStorageKey } from "@producktivity/constants";
import { Button } from "@producktivity/design";

import { decode, encode } from "base64-arraybuffer";

interface LoginProps {
  username: string;
  onComplete?: () => void;
}

export const Login: FC<LoginProps> = ({ onComplete, username: uname }) => {
  const [requestLogin] = useRequestLoginMutation();
  const [verifyLogin] = useVerifyLoginMutation();

  const handleLogin = useCallback(
    async (username: string) => {
      const { data } = await requestLogin({
        variables: {
          username,
        },
      });

      const { allowedCredentials, challenge } = data?.requestLogin ?? {};

      if (!challenge || !allowedCredentials) {
        throw new Error("Todo: implement error handling in this edgy case");
      }

      const credential = (await navigator.credentials.get({
        publicKey: {
          challenge: decode(challenge),
          allowCredentials: allowedCredentials.map((o) => ({
            id: decode(o.id),
            type: "public-key",
          })),
          userVerification: "preferred",
        },
      })) as PublicKeyCredential | null;

      if (credential === null) {
        throw new Error("failed to obtain credential");
      }

      const rawToken = await verifyLogin({
        variables: {
          id: credential.id,
          response: {
            clientDataJSON: encode(credential.response.clientDataJSON),
            authenticatorData: encode(
              (credential.response as any).authenticatorData
            ),
            signature: encode((credential.response as any).signature),
          },
        },
      });

      const token = rawToken.data?.verifyLogin.token;

      localStorage.setItem(authorizationLocalStorageKey, token ?? "");

      onComplete?.();
    },
    [onComplete, requestLogin, verifyLogin]
  );

  return (
    <Button variant="secondary" onClick={() => handleLogin(uname)}>
      Login
    </Button>
  );
};

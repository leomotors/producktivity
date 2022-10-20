import { FC, useCallback } from "react";

import {
  useRequestRegisterMutation,
  useVerifyRegisterMutation,
} from "@producktivity/codegen";
import { Button } from "@producktivity/design";

import { decode, encode } from "base64-arraybuffer";

interface RegisterProps {
  username: string;
  onComplete?: (token: string) => void;
}

export const Register: FC<RegisterProps> = ({
  onComplete,
  username: uname,
}) => {
  const [requestRegister] = useRequestRegisterMutation();
  const [verifyRegister] = useVerifyRegisterMutation();

  const handleRegister = useCallback(
    async (username: string) => {
      const data = await requestRegister({
        variables: {
          username,
        },
      });

      const preCredential = data.data?.requestRegister;

      if (!preCredential) throw new Error("some shit will fix later");

      const credential = (await navigator.credentials.create({
        publicKey: {
          challenge: decode(preCredential.challenge),
          rp: preCredential.relyingParty,
          user: {
            id: decode(preCredential.userId),
            name: username,
            displayName: username,
          },
          pubKeyCredParams: [
            /**
             * https://www.w3.org/TR/webauthn-2/#typedefdef-cosealgorithmidentifier
             */

            // ES256: ECDSA with SHA256
            { alg: -7, type: "public-key" },
            // RS256: RSA Signature with SHA256
            { alg: -257, type: "public-key" },
          ],
          authenticatorSelection: {
            userVerification: "preferred",
            requireResidentKey: false,
          },
          attestation: "direct",
        },
      })) as PublicKeyCredential | null;

      if (credential === null) {
        throw new Error("credential creation failed");
      }

      const rawToken = await verifyRegister({
        variables: {
          id: credential.id,
          rawId: encode(credential.rawId),
          type: credential.type,
          response: {
            attestationObject: encode(
              (
                credential.response as unknown as {
                  attestationObject: ArrayBuffer;
                }
              ).attestationObject as ArrayBuffer
            ),
            clientDataJSON: encode(credential.response.clientDataJSON),
          },
        },
      });

      const token = rawToken.data?.verifyRegister.token;

      onComplete?.(token ?? "");
    },
    [onComplete, requestRegister, verifyRegister]
  );

  return (
    <Button variant="primary" onClick={() => handleRegister(uname)}>
      Register
    </Button>
  );
};

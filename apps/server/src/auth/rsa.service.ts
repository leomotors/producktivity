import { Injectable } from "@nestjs/common";

import * as cbor from "cbor";
import * as crypto from "node:crypto";

@Injectable()
export class RsaService {
  decodeRegisterAuthData(buffer: Buffer) {
    const rpIdHash = buffer.slice(0, 32);
    buffer = buffer.slice(32);
    const flagsBuf = buffer.slice(0, 1);
    buffer = buffer.slice(1);
    const flags = flagsBuf[0];
    const counterBuf = buffer.slice(0, 4);
    buffer = buffer.slice(4);
    const counter = counterBuf.readUInt32BE(0);
    const aaguid = buffer.slice(0, 16);
    buffer = buffer.slice(16);
    const credIDLenBuf = buffer.slice(0, 2);
    buffer = buffer.slice(2);
    const credIDLen = credIDLenBuf.readUInt16BE(0);
    const credID = buffer.slice(0, credIDLen);
    buffer = buffer.slice(credIDLen);
    const COSEPublicKey = buffer;

    return {
      rpIdHash,
      flagsBuf,
      flags,
      counter,
      counterBuf,
      aaguid,
      credID,
      COSEPublicKey,
    };
  }

  COSEECDHAtoPKCS(COSEPublicKey: Buffer) {
    /* 
      +------+-------+-------+---------+----------------------------------+
      | name | key   | label | type    | description                      |
      |      | type  |       |         |                                  |
      +------+-------+-------+---------+----------------------------------+
      | crv  | 2     | -1    | int /   | EC Curve identifier - Taken from |
      |      |       |       | tstr    | the COSE Curves registry         |
      |      |       |       |         |                                  |
      | x    | 2     | -2    | bstr    | X Coordinate                     |
      |      |       |       |         |                                  |
      | y    | 2     | -3    | bstr /  | Y Coordinate                     |
      |      |       |       | bool    |                                  |
      |      |       |       |         |                                  |
      | d    | 2     | -4    | bstr    | Private key                      |
      +------+-------+-------+---------+----------------------------------+
    */

    const coseStruct = cbor.decodeAllSync(COSEPublicKey)[0];
    const tag = Buffer.from([0x04]);
    const x = coseStruct.get(-2);
    const y = coseStruct.get(-3);

    return Buffer.concat([tag, x, y]);
  }

  decodeLoginAuthData(buffer: Buffer) {
    const rpIdHash = buffer.slice(0, 32);
    buffer = buffer.slice(32);
    const flagsBuf = buffer.slice(0, 1);
    buffer = buffer.slice(1);
    const flags = flagsBuf[0];
    const counterBuf = buffer.slice(0, 4);
    buffer = buffer.slice(4);
    const counter = counterBuf.readUInt32BE(0);

    return { rpIdHash, flagsBuf, flags, counter, counterBuf };
  }

  getSha256Hash(buffer: Buffer) {
    return crypto.createHash("SHA256").update(buffer).digest();
  }

  // Convert binary certificate or public key to an OpenSSL-compatible PEM text format
  ASN1toPEM(asn1: Buffer) {
    if (!Buffer.isBuffer(asn1))
      throw new Error("ASN1toPEM: pkBuffer must be Buffer.");

    let type;
    if (asn1.length === 65 && asn1[0] === 0x04) {
      /*
        If needed, we encode rawpublic key to ASN structure, adding metadata:
        SEQUENCE {
          SEQUENCE {
            OBJECTIDENTIFIER 1.2.840.10045.2.1 (ecPublicKey)
            OBJECTIDENTIFIER 1.2.840.10045.3.1.7 (P-256)
          }
          BITSTRING <raw public key>
        }
        Luckily, to do that, we just need to prefix it with constant 26 bytes (metadata is constant).
      */

      asn1 = Buffer.concat([
        Buffer.from(
          "3059301306072a8648ce3d020106082a8648ce3d030107034200",
          "hex"
        ),
        asn1,
      ]);

      type = "PUBLIC KEY";
    } else {
      type = "CERTIFICATE";
    }

    const b64cert = asn1.toString("base64");

    let PEMKey = "";
    for (let i = 0; i < Math.ceil(b64cert.length / 64); i++) {
      const start = 64 * i;

      PEMKey += b64cert.substr(start, 64) + "\n";
    }

    PEMKey = `-----BEGIN ${type}-----\n` + PEMKey + `-----END ${type}-----\n`;

    return PEMKey;
  }

  // verify signature from signature, data, and PEM key
  verifySignature(signature: Buffer, data: Buffer, publicKey: string) {
    return crypto
      .createVerify("SHA256")
      .update(data)
      .verify(publicKey, signature);
  }
}

import { Injectable } from "@nestjs/common";

import * as cbor from "cbor";

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
}

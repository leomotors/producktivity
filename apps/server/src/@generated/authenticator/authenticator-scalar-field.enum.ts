import { registerEnumType } from '@nestjs/graphql';

export enum AuthenticatorScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    fmt = "fmt",
    publicKey = "publicKey",
    counter = "counter",
    credentialId = "credentialId",
    userId = "userId"
}


registerEnumType(AuthenticatorScalarFieldEnum, { name: 'AuthenticatorScalarFieldEnum', description: undefined })

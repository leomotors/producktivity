import { registerEnumType } from '@nestjs/graphql';

export enum CaseScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updateAt = "updateAt",
    userId = "userId"
}


registerEnumType(CaseScalarFieldEnum, { name: 'CaseScalarFieldEnum', description: undefined })

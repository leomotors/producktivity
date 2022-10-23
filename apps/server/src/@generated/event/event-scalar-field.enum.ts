import { registerEnumType } from '@nestjs/graphql';

export enum EventScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    dueDate = "dueDate",
    createdAt = "createdAt",
    updateAt = "updateAt",
    caseId = "caseId"
}


registerEnumType(EventScalarFieldEnum, { name: 'EventScalarFieldEnum', description: undefined })

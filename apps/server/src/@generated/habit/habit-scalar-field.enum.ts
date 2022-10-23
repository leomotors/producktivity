import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
    id = "id",
    name = "name",
    createdAt = "createdAt",
    updateAt = "updateAt",
    caseId = "caseId"
}


registerEnumType(HabitScalarFieldEnum, { name: 'HabitScalarFieldEnum', description: undefined })

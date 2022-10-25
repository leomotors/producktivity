import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
    id = "id",
    name = "name",
    tags = "tags",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(HabitScalarFieldEnum, { name: 'HabitScalarFieldEnum', description: undefined })

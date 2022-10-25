import { registerEnumType } from '@nestjs/graphql';

export enum HabitScalarFieldEnum {
    id = "id",
    name = "name",
    tags = "tags",
    currentCount = "currentCount",
    requireCount = "requireCount",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    userId = "userId"
}


registerEnumType(HabitScalarFieldEnum, { name: 'HabitScalarFieldEnum', description: undefined })

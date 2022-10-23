import { registerEnumType } from '@nestjs/graphql';

export enum NotificationScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isVisited = "isVisited",
    createdAt = "createdAt",
    updateAt = "updateAt",
    userId = "userId"
}


registerEnumType(NotificationScalarFieldEnum, { name: 'NotificationScalarFieldEnum', description: undefined })

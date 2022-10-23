import { registerEnumType } from '@nestjs/graphql';

export enum TaskScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    due_date = "due_date",
    createdAt = "createdAt",
    updateAt = "updateAt",
    isCompleted = "isCompleted",
    caseId = "caseId"
}


registerEnumType(TaskScalarFieldEnum, { name: 'TaskScalarFieldEnum', description: undefined })

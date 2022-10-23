import { registerEnumType } from '@nestjs/graphql';

export enum FilterScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    caseId = "caseId",
    filterDefinitionId = "filterDefinitionId"
}


registerEnumType(FilterScalarFieldEnum, { name: 'FilterScalarFieldEnum', description: undefined })

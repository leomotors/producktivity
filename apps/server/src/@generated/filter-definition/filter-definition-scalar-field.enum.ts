import { registerEnumType } from '@nestjs/graphql';

export enum FilterDefinitionScalarFieldEnum {
    id = "id",
    label = "label",
    order = "order"
}


registerEnumType(FilterDefinitionScalarFieldEnum, { name: 'FilterDefinitionScalarFieldEnum', description: undefined })

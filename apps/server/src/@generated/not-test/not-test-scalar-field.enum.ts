import { registerEnumType } from '@nestjs/graphql';

export enum NotTestScalarFieldEnum {
    id = "id"
}


registerEnumType(NotTestScalarFieldEnum, { name: 'NotTestScalarFieldEnum', description: undefined })

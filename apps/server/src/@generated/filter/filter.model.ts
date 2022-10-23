import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Case } from '../case/case.model';
import { FilterDefinition } from '../filter-definition/filter-definition.model';

@ObjectType()
export class Filter {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Case, {nullable:false})
    case?: Case;

    @Field(() => String, {nullable:false})
    caseId!: string;

    @Field(() => FilterDefinition, {nullable:false})
    FilterDefinition?: FilterDefinition;

    @Field(() => String, {nullable:false})
    filterDefinitionId!: string;
}

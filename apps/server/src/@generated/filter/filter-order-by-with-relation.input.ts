import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CaseOrderByWithRelationInput } from '../case/case-order-by-with-relation.input';
import { FilterDefinitionOrderByWithRelationInput } from '../filter-definition/filter-definition-order-by-with-relation.input';

@InputType()
export class FilterOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => CaseOrderByWithRelationInput, {nullable:true})
    case?: CaseOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    caseId?: keyof typeof SortOrder;

    @Field(() => FilterDefinitionOrderByWithRelationInput, {nullable:true})
    FilterDefinition?: FilterDefinitionOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    filterDefinitionId?: keyof typeof SortOrder;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class NotTestScalarWhereWithAggregatesInput {

    @Field(() => [NotTestScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<NotTestScalarWhereWithAggregatesInput>;

    @Field(() => [NotTestScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<NotTestScalarWhereWithAggregatesInput>;

    @Field(() => [NotTestScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<NotTestScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}

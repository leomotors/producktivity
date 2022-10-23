import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterUpdateInput } from './filter-update.input';
import { Type } from 'class-transformer';
import { FilterWhereUniqueInput } from './filter-where-unique.input';

@ArgsType()
export class UpdateOneFilterArgs {

    @Field(() => FilterUpdateInput, {nullable:false})
    @Type(() => FilterUpdateInput)
    data!: FilterUpdateInput;

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;
}

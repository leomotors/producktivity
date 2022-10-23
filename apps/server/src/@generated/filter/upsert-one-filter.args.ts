import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterWhereUniqueInput } from './filter-where-unique.input';
import { Type } from 'class-transformer';
import { FilterCreateInput } from './filter-create.input';
import { FilterUpdateInput } from './filter-update.input';

@ArgsType()
export class UpsertOneFilterArgs {

    @Field(() => FilterWhereUniqueInput, {nullable:false})
    @Type(() => FilterWhereUniqueInput)
    where!: FilterWhereUniqueInput;

    @Field(() => FilterCreateInput, {nullable:false})
    @Type(() => FilterCreateInput)
    create!: FilterCreateInput;

    @Field(() => FilterUpdateInput, {nullable:false})
    @Type(() => FilterUpdateInput)
    update!: FilterUpdateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterUpdateManyMutationInput } from './filter-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FilterWhereInput } from './filter-where.input';

@ArgsType()
export class UpdateManyFilterArgs {

    @Field(() => FilterUpdateManyMutationInput, {nullable:false})
    @Type(() => FilterUpdateManyMutationInput)
    data!: FilterUpdateManyMutationInput;

    @Field(() => FilterWhereInput, {nullable:true})
    @Type(() => FilterWhereInput)
    where?: FilterWhereInput;
}

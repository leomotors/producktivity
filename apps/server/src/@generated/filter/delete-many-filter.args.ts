import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterWhereInput } from './filter-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyFilterArgs {

    @Field(() => FilterWhereInput, {nullable:true})
    @Type(() => FilterWhereInput)
    where?: FilterWhereInput;
}

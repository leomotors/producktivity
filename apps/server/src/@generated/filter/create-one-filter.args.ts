import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterCreateInput } from './filter-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFilterArgs {

    @Field(() => FilterCreateInput, {nullable:false})
    @Type(() => FilterCreateInput)
    data!: FilterCreateInput;
}

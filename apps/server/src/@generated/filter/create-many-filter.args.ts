import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FilterCreateManyInput } from './filter-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFilterArgs {

    @Field(() => [FilterCreateManyInput], {nullable:false})
    @Type(() => FilterCreateManyInput)
    data!: Array<FilterCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

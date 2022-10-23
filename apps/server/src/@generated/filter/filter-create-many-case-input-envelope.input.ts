import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FilterCreateManyCaseInput } from './filter-create-many-case.input';
import { Type } from 'class-transformer';

@InputType()
export class FilterCreateManyCaseInputEnvelope {

    @Field(() => [FilterCreateManyCaseInput], {nullable:false})
    @Type(() => FilterCreateManyCaseInput)
    data!: Array<FilterCreateManyCaseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

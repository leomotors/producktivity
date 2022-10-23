import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseCreateManyInput } from './case-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCaseArgs {

    @Field(() => [CaseCreateManyInput], {nullable:false})
    @Type(() => CaseCreateManyInput)
    data!: Array<CaseCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseCreateManyUserInput } from './case-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CaseCreateManyUserInputEnvelope {

    @Field(() => [CaseCreateManyUserInput], {nullable:false})
    @Type(() => CaseCreateManyUserInput)
    data!: Array<CaseCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

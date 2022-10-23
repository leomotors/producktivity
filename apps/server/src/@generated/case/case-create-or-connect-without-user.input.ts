import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutUserInput } from './case-create-without-user.input';

@InputType()
export class CaseCreateOrConnectWithoutUserInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateWithoutUserInput, {nullable:false})
    @Type(() => CaseCreateWithoutUserInput)
    create!: CaseCreateWithoutUserInput;
}

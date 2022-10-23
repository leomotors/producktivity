import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutEventInput } from './case-create-without-event.input';

@InputType()
export class CaseCreateOrConnectWithoutEventInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateWithoutEventInput, {nullable:false})
    @Type(() => CaseCreateWithoutEventInput)
    create!: CaseCreateWithoutEventInput;
}

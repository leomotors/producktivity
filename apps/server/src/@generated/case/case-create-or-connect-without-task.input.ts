import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutTaskInput } from './case-create-without-task.input';

@InputType()
export class CaseCreateOrConnectWithoutTaskInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateWithoutTaskInput, {nullable:false})
    @Type(() => CaseCreateWithoutTaskInput)
    create!: CaseCreateWithoutTaskInput;
}

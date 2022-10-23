import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseUpdateWithoutTaskInput } from './case-update-without-task.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutTaskInput } from './case-create-without-task.input';

@InputType()
export class CaseUpsertWithoutTaskInput {

    @Field(() => CaseUpdateWithoutTaskInput, {nullable:false})
    @Type(() => CaseUpdateWithoutTaskInput)
    update!: CaseUpdateWithoutTaskInput;

    @Field(() => CaseCreateWithoutTaskInput, {nullable:false})
    @Type(() => CaseCreateWithoutTaskInput)
    create!: CaseCreateWithoutTaskInput;
}

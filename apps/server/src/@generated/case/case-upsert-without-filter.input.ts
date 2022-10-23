import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseUpdateWithoutFilterInput } from './case-update-without-filter.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutFilterInput } from './case-create-without-filter.input';

@InputType()
export class CaseUpsertWithoutFilterInput {

    @Field(() => CaseUpdateWithoutFilterInput, {nullable:false})
    @Type(() => CaseUpdateWithoutFilterInput)
    update!: CaseUpdateWithoutFilterInput;

    @Field(() => CaseCreateWithoutFilterInput, {nullable:false})
    @Type(() => CaseCreateWithoutFilterInput)
    create!: CaseCreateWithoutFilterInput;
}

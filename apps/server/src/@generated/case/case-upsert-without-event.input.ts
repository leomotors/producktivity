import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseUpdateWithoutEventInput } from './case-update-without-event.input';
import { Type } from 'class-transformer';
import { CaseCreateWithoutEventInput } from './case-create-without-event.input';

@InputType()
export class CaseUpsertWithoutEventInput {

    @Field(() => CaseUpdateWithoutEventInput, {nullable:false})
    @Type(() => CaseUpdateWithoutEventInput)
    update!: CaseUpdateWithoutEventInput;

    @Field(() => CaseCreateWithoutEventInput, {nullable:false})
    @Type(() => CaseCreateWithoutEventInput)
    create!: CaseCreateWithoutEventInput;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseUpdateWithoutUserInput } from './case-update-without-user.input';

@InputType()
export class CaseUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseUpdateWithoutUserInput, {nullable:false})
    @Type(() => CaseUpdateWithoutUserInput)
    data!: CaseUpdateWithoutUserInput;
}

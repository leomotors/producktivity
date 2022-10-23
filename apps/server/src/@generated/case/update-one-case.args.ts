import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseUpdateInput } from './case-update.input';
import { Type } from 'class-transformer';
import { CaseWhereUniqueInput } from './case-where-unique.input';

@ArgsType()
export class UpdateOneCaseArgs {

    @Field(() => CaseUpdateInput, {nullable:false})
    @Type(() => CaseUpdateInput)
    data!: CaseUpdateInput;

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;
}

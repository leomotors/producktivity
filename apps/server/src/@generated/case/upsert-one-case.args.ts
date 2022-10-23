import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseWhereUniqueInput } from './case-where-unique.input';
import { Type } from 'class-transformer';
import { CaseCreateInput } from './case-create.input';
import { CaseUpdateInput } from './case-update.input';

@ArgsType()
export class UpsertOneCaseArgs {

    @Field(() => CaseWhereUniqueInput, {nullable:false})
    @Type(() => CaseWhereUniqueInput)
    where!: CaseWhereUniqueInput;

    @Field(() => CaseCreateInput, {nullable:false})
    @Type(() => CaseCreateInput)
    create!: CaseCreateInput;

    @Field(() => CaseUpdateInput, {nullable:false})
    @Type(() => CaseUpdateInput)
    update!: CaseUpdateInput;
}

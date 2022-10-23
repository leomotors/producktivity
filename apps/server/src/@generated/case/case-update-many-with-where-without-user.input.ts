import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CaseScalarWhereInput } from './case-scalar-where.input';
import { Type } from 'class-transformer';
import { CaseUpdateManyMutationInput } from './case-update-many-mutation.input';

@InputType()
export class CaseUpdateManyWithWhereWithoutUserInput {

    @Field(() => CaseScalarWhereInput, {nullable:false})
    @Type(() => CaseScalarWhereInput)
    where!: CaseScalarWhereInput;

    @Field(() => CaseUpdateManyMutationInput, {nullable:false})
    @Type(() => CaseUpdateManyMutationInput)
    data!: CaseUpdateManyMutationInput;
}

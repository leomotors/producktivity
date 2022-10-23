import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseUpdateManyMutationInput } from './case-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CaseWhereInput } from './case-where.input';

@ArgsType()
export class UpdateManyCaseArgs {

    @Field(() => CaseUpdateManyMutationInput, {nullable:false})
    @Type(() => CaseUpdateManyMutationInput)
    data!: CaseUpdateManyMutationInput;

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;
}

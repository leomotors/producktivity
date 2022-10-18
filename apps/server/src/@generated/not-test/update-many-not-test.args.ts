import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestUpdateManyMutationInput } from './not-test-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotTestWhereInput } from './not-test-where.input';

@ArgsType()
export class UpdateManyNotTestArgs {

    @Field(() => NotTestUpdateManyMutationInput, {nullable:false})
    @Type(() => NotTestUpdateManyMutationInput)
    data!: NotTestUpdateManyMutationInput;

    @Field(() => NotTestWhereInput, {nullable:true})
    @Type(() => NotTestWhereInput)
    where?: NotTestWhereInput;
}

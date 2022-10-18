import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestUpdateInput } from './not-test-update.input';
import { Type } from 'class-transformer';
import { NotTestWhereUniqueInput } from './not-test-where-unique.input';

@ArgsType()
export class UpdateOneNotTestArgs {

    @Field(() => NotTestUpdateInput, {nullable:false})
    @Type(() => NotTestUpdateInput)
    data!: NotTestUpdateInput;

    @Field(() => NotTestWhereUniqueInput, {nullable:false})
    @Type(() => NotTestWhereUniqueInput)
    where!: NotTestWhereUniqueInput;
}

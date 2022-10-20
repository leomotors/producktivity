import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereUniqueInput } from './not-test-where-unique.input';
import { Type } from 'class-transformer';
import { NotTestCreateInput } from './not-test-create.input';
import { NotTestUpdateInput } from './not-test-update.input';

@ArgsType()
export class UpsertOneNotTestArgs {

    @Field(() => NotTestWhereUniqueInput, {nullable:false})
    @Type(() => NotTestWhereUniqueInput)
    where!: NotTestWhereUniqueInput;

    @Field(() => NotTestCreateInput, {nullable:false})
    @Type(() => NotTestCreateInput)
    create!: NotTestCreateInput;

    @Field(() => NotTestUpdateInput, {nullable:false})
    @Type(() => NotTestUpdateInput)
    update!: NotTestUpdateInput;
}

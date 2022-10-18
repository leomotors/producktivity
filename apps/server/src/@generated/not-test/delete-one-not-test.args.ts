import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereUniqueInput } from './not-test-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneNotTestArgs {

    @Field(() => NotTestWhereUniqueInput, {nullable:false})
    @Type(() => NotTestWhereUniqueInput)
    where!: NotTestWhereUniqueInput;
}

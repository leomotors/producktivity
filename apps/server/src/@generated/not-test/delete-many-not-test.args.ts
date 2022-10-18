import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestWhereInput } from './not-test-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotTestArgs {

    @Field(() => NotTestWhereInput, {nullable:true})
    @Type(() => NotTestWhereInput)
    where?: NotTestWhereInput;
}

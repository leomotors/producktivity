import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestCreateInput } from './not-test-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneNotTestArgs {

    @Field(() => NotTestCreateInput, {nullable:false})
    @Type(() => NotTestCreateInput)
    data!: NotTestCreateInput;
}

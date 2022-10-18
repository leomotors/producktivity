import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotTestCreateManyInput } from './not-test-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotTestArgs {

    @Field(() => [NotTestCreateManyInput], {nullable:false})
    @Type(() => NotTestCreateManyInput)
    data!: Array<NotTestCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

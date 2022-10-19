import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotTestCreateManyInput {

    @Field(() => String, {nullable:false})
    id!: string;
}

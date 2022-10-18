import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotTestCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;
}

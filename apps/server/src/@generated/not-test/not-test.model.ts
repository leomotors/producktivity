import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotTest {

    @Field(() => String, {nullable:false})
    id!: string;
}

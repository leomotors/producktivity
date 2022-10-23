import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TaskMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    name?: true;

    @Field(() => Boolean, {nullable:true})
    description?: true;

    @Field(() => Boolean, {nullable:true})
    due_date?: true;

    @Field(() => Boolean, {nullable:true})
    isCompleted?: true;

    @Field(() => Boolean, {nullable:true})
    caseId?: true;
}

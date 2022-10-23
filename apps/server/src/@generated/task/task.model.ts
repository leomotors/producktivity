import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Case } from '../case/case.model';

@ObjectType()
export class Task {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => Date, {nullable:false})
    due_date!: Date;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    isCompleted!: boolean;

    @Field(() => Case, {nullable:false})
    case?: Case;

    @Field(() => String, {nullable:false})
    caseId!: string;
}

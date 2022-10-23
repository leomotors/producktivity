import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Case } from '../case/case.model';

@ObjectType()
export class Event {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:true})
    description!: string | null;

    @Field(() => Date, {nullable:false})
    dueDate!: Date;

    @Field(() => Case, {nullable:false})
    case?: Case;

    @Field(() => String, {nullable:false})
    caseId!: string;
}

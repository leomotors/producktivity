import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCaseInput } from './event-create-without-case.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCaseInput } from './event-create-or-connect-without-case.input';
import { EventWhereUniqueInput } from './event-where-unique.input';

@InputType()
export class EventCreateNestedOneWithoutCaseInput {

    @Field(() => EventCreateWithoutCaseInput, {nullable:true})
    @Type(() => EventCreateWithoutCaseInput)
    create?: EventCreateWithoutCaseInput;

    @Field(() => EventCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCaseInput)
    connectOrCreate?: EventCreateOrConnectWithoutCaseInput;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: EventWhereUniqueInput;
}

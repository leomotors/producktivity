import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EventCreateWithoutCaseInput } from './event-create-without-case.input';
import { Type } from 'class-transformer';
import { EventCreateOrConnectWithoutCaseInput } from './event-create-or-connect-without-case.input';
import { EventUpsertWithoutCaseInput } from './event-upsert-without-case.input';
import { EventWhereUniqueInput } from './event-where-unique.input';
import { EventUpdateWithoutCaseInput } from './event-update-without-case.input';

@InputType()
export class EventUpdateOneWithoutCaseNestedInput {

    @Field(() => EventCreateWithoutCaseInput, {nullable:true})
    @Type(() => EventCreateWithoutCaseInput)
    create?: EventCreateWithoutCaseInput;

    @Field(() => EventCreateOrConnectWithoutCaseInput, {nullable:true})
    @Type(() => EventCreateOrConnectWithoutCaseInput)
    connectOrCreate?: EventCreateOrConnectWithoutCaseInput;

    @Field(() => EventUpsertWithoutCaseInput, {nullable:true})
    @Type(() => EventUpsertWithoutCaseInput)
    upsert?: EventUpsertWithoutCaseInput;

    @Field(() => Boolean, {nullable:true})
    disconnect?: boolean;

    @Field(() => Boolean, {nullable:true})
    delete?: boolean;

    @Field(() => EventWhereUniqueInput, {nullable:true})
    @Type(() => EventWhereUniqueInput)
    connect?: EventWhereUniqueInput;

    @Field(() => EventUpdateWithoutCaseInput, {nullable:true})
    @Type(() => EventUpdateWithoutCaseInput)
    update?: EventUpdateWithoutCaseInput;
}

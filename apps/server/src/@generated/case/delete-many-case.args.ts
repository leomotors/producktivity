import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CaseWhereInput } from './case-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyCaseArgs {

    @Field(() => CaseWhereInput, {nullable:true})
    @Type(() => CaseWhereInput)
    where?: CaseWhereInput;
}

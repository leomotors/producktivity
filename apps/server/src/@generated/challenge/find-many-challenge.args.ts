import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeWhereInput } from './challenge-where.input';
import { Type } from 'class-transformer';
import { ChallengeOrderByWithRelationInput } from './challenge-order-by-with-relation.input';
import { ChallengeWhereUniqueInput } from './challenge-where-unique.input';
import { Int } from '@nestjs/graphql';
import { ChallengeScalarFieldEnum } from './challenge-scalar-field.enum';

@ArgsType()
export class FindManyChallengeArgs {

    @Field(() => ChallengeWhereInput, {nullable:true})
    @Type(() => ChallengeWhereInput)
    where?: ChallengeWhereInput;

    @Field(() => [ChallengeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ChallengeOrderByWithRelationInput>;

    @Field(() => ChallengeWhereUniqueInput, {nullable:true})
    cursor?: ChallengeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [ChallengeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ChallengeScalarFieldEnum>;
}

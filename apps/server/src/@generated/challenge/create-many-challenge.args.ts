import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ChallengeCreateManyInput } from './challenge-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyChallengeArgs {

    @Field(() => [ChallengeCreateManyInput], {nullable:false})
    @Type(() => ChallengeCreateManyInput)
    data!: Array<ChallengeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

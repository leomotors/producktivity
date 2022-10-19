import { registerEnumType } from '@nestjs/graphql';

export enum ChallengeScalarFieldEnum {
    id = "id",
    challenge = "challenge",
    createdAt = "createdAt",
    userId = "userId"
}


registerEnumType(ChallengeScalarFieldEnum, { name: 'ChallengeScalarFieldEnum', description: undefined })

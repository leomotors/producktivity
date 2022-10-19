import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class NotTestWhereInput {

    @Field(() => [NotTestWhereInput], {nullable:true})
    AND?: Array<NotTestWhereInput>;

    @Field(() => [NotTestWhereInput], {nullable:true})
    OR?: Array<NotTestWhereInput>;

    @Field(() => [NotTestWhereInput], {nullable:true})
    NOT?: Array<NotTestWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;
}

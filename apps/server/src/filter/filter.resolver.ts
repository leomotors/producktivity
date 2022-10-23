/* eslint-disable @typescript-eslint/no-unused-vars */
import { Args, Mutation, Resolver } from "@nestjs/graphql";

import "./dto/filter.dto";
import { FilterService } from "./filter.service";

@Resolver()
export class FilterResolver {
  //constructor() {}
}

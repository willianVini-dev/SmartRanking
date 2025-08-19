import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class PlayersValidadtionParametersPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    if(!value)
      throw new BadRequestException('Email parameter is required');

    return value;
  }
}
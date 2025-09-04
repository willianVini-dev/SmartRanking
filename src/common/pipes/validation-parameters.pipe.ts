import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class ValidadtionParametersPipe implements PipeTransform {

  transform(value: any, metadata: ArgumentMetadata) {
    if(!value)
      throw new BadRequestException(`The param ${metadata.data} is required`);

    return value;
  }
}
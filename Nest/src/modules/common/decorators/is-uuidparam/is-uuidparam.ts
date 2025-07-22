import { HttpStatus, Param, ParseUUIDPipe } from '@nestjs/common';

// Isso aqui é um @Param customizado com um pipe de parse para UUID type
// quando nós passsarmos o parametro no end point controller, nós coolocamos
// esse decorator, e ele fará uma validação de tipagem interna
export function IsUuidDecorator(property: string): ParameterDecorator {
  return Param(
    property,
    new ParseUUIDPipe({
      errorHttpStatusCode: HttpStatus.BAD_REQUEST,
      exceptionFactory: () => {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'This is not a valid UUID',
        };
      },
    }),
  );
}

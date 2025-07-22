# Curso - NestJS

## Módulo 2

### Pipes

- OS pipes nada mais são do que classes, muitas vezes usadas como decorators
- Eles servem para basicamente duas funções principais:
  1. **Validação de dados**
     - Eles podem aplicar qualquer tipo de validação, desde somente tipo (ex: string), até verificar se uma determinada senha é compatível com uma determinada RegEx.

  2. **Transformação de dados**
     - Podem tratar um dado e colocar no formato desejado

- Podemos usar os Pipes tanto para parâmetros de funções, em propriedades de uma classe ou até globalmente.
- Podemos criar pipes customizados, com diversos tipo de validação customizada, e mensagens de erro e exceções também.

**Exemplo de um Custom Pipe:**

```JavaScript
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
```

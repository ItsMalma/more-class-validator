import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from "class-validator";

export function Compare(property: string, options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "compare",
      target: object.constructor,
      propertyName,
      constraints: [property],
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return value === args.object[args.constraints[0]];
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} must be match with ${args.constraints[0]}`;
        },
      },
    });
  };
}

export function IsNotNull(options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotNull",
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return value !== null;
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} must be not null`;
        },
      },
    });
  };
}

export function IsNotUndefined(options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNotUndefined",
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return value !== undefined;
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} must be not undefined`;
        },
      },
    });
  };
}

export function IsNull(options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNull",
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return value !== undefined;
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} must be null`;
        },
      },
    });
  };
}

export function IsUndefined(options?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isUndefined",
      target: object.constructor,
      propertyName,
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          return value !== undefined;
        },
        defaultMessage(args?: ValidationArguments): string {
          return `${args.property} must be undefined`;
        },
      },
    });
  };
}

export interface SlugValidationOptions {
  separator?: string;
}

Buffer.from("a", "ascii");

export function IsSlug(
  slugValidationOptions: SlugValidationOptions,
  options?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isSlug",
      target: object.constructor,
      propertyName,
      constraints: [slugValidationOptions],
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          if (typeof value !== "string") return false;
          const separator = args.constraints[0].separator || "-";
          return value
            .split("")
            .every(
              (c) =>
                c !== separator ||
                (c >= "0" && c <= "9") ||
                (c >= "a" && c <= "z") ||
                (c >= "A" && c <= "Z")
            );
        },
      },
    });
  };
}

export interface NumberListValidationOptions {
  separator?: string;
  allowNegative?: boolean;
}

export function IsNumberList(
  numberListValidationOptions?: NumberListValidationOptions,
  options?: ValidationOptions
) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: "isNumberList",
      target: object.constructor,
      propertyName,
      constraints: [numberListValidationOptions],
      options,
      validator: {
        validate(value: any, args: ValidationArguments): boolean {
          if (typeof value !== "string") return false;
          const separator = args.constraints[0].separator || ",";
          return value
            .split(separator)
            .every((c) =>
              args.constraints[0].allowNegative || true
                ? !isNaN(Number(c))
                : c >= "0" && c <= "9"
            );
        },
      },
    });
  };
}

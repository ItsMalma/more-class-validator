# More Class Validator

A library that contain more validation (as decorator) for class-validator library.

## What Do I Use

- [NodeJS](https://nodejs.org)
- [NPM](https://www.npmjs.com)
- [TypeScript](https://www.typescriptlang.org/)
- [ClassValidator](https://www.npmjs.com/package/class-validator)

## Install

Install this library with NPM or Yarn.

**NPM**:

```bash
npm install class-validator more-class-validator
```

**Yarn**:

```bash
yarn add class-validator more-class-validator
```

## Validators

- `Compare`: compare a property to another property on the same object. It takes the name of the other property as an argument, and it ensures that the two properties have the same value.
- `IsNotNull`: determine whether property is not a null.
- `IsNotUndefined`: determine whether property is not an undefined.
- `IsNull`: determine whether property is a null.
- `IsUndefined`: determine whether property is an undefined.
- `IsSlug`: validate that a string property is in the correct format to be used as a URL slug, also takes an options object that allows you to specify the separator character to use.
- `IsNumberList`: validate that a string property is a list of numbers with separated by a specified characacter in the options.

## Authors

- [@ItsMalma](https://www.github.com/ItsMalma)

## License

[MIT](https://choosealicense.com/licenses/mit/)

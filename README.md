# @x12i/pagenti-core usage example

Local package logic for Pagenti: validate, pack, and prepare knowledge and execution records.

This consuming application demonstrates **parse a scoped package specification and normalize its manifest** using the published npm package, pinned to `1.1.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Validate a local knowledge or execution package before publication.
- Pack authored content into the supported package records.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/pagenti-core)
- [Implementation monorepo](https://github.com/x12i/pagenti)
- [Reviewed package source](https://github.com/x12i/pagenti/tree/02d0e5fa7e2bdd167133d6137650f0e63fc6df21/packages/core)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.

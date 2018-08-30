This package contains helpers used by [core-es packages](https://www.npmjs.com/org/core-es).

# api

### @core-es/util/polyfill/getter

```typescript
(O: {}, name: string | number | Symbol, fn: Function) => void
```

A simple helper to add a getter.

### @core-es/util/polyfill/setter

```typescript
(O: {}, name: string | number | Symbol, fn: Function) => void
```

A simple helper to add a setter.

### @core-es/util/polyfill/value

```typescript
(O: {}, name: string | number | Symbol, value: any) => void
```

A simple helper to polyfill the target if it is `undefined`.

# contributing

- Source: https://github.com/futagoza/core-es/tree/master/packages/util
- Issues: https://github.com/futagoza/core-es/issues

> NOTE: I won't be accepting feature requests for this module.

# license

Copyright © 2018+ Futago-za Ryuu, [https://github.com/futagoza](https://github.com/futagoza)<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT).

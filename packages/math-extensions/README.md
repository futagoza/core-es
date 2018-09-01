This package contains implementations of methods and constants in the [Math Extensions Proposal](https://github.com/rwaldron/proposal-math-extensions).

# api

### @core-es/math-extensions/clamp

```typescript
Math.clamp(x: number, lower: number, upper: number) => number
```

Clamp a number.

### @core-es/math-extensions/DEG_PER_RAD

```typescript
Math.DEG_PER_RAD: number
```

A Number value of approximately `0.0174532925199432`.

### @core-es/math-extensions/RAD_PER_DEG

```typescript
Math.RAD_PER_DEG: number
```

A Number value of approximately `57.29577951308232`.

### @core-es/math-extensions/scale

```typescript
Math.scale(x: number, inLow: number, inHigh: number, outLow: number, outHigh: number) => number
```

### @core-es/math-extensions/fscale

```typescript
Math.fscale(x: number, inLow: number, inHigh: number, outLow: number, outHigh: number) => number
```

### @core-es/math-extensions/radians

```typescript
Math.radians(degrees: number) => number
```

### @core-es/math-extensions/degrees

```typescript
Math.degrees(radians: number) => number
```

# polyfill

You can polyfill each of the above methods and constants by importing it's `*/polyfill` module.

For example, to polyfill `Math.clamp`, you import: _@core-es/math-extensions/clamp/polyfill_

# proposal status

- Stage: *1*
- Spec: _[https://rwaldron.github.io/proposal-math-extensions/](https://rwaldron.github.io/proposal-math-extensions/)_
- Updated: _July 28, 2016_

# license

Copyright © 2018+ Futago-za Ryuu, [https://github.com/futagoza](https://github.com/futagoza)<br>
Released under the MIT License, [http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT).

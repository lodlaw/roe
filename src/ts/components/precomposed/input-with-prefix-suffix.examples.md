#### Examples

Example with class names

```js
<InputWithPrefixSuffix
  prefix="£"
  suffix="%"
  value="Example"
  onChange={() => null}
  className="applied-to-input-group"
  inputClassName="applied-to-input"
  prefixClassName="primary"
  suffixClassName="error"
/>
```

Display block with React element prefix

```js
<InputWithPrefixSuffix
  block
  prefix={<strong>Strong</strong>}
  value="Example"
  onChange={() => null}
/>
```

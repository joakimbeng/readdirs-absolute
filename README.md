# readdirs-absolute

[![NPM version][npm-image]][npm-url]

> As readdir-absolute but for an array of directories

## Installation

Install `readdirs-absolute` using [npm](https://www.npmjs.com/):

```bash
npm install --save readdirs-absolute
```

## Usage

### Module usage

```javascript
var readdirs = require('readdirs-absolute');

readdirs(['/folder1', '/folder2'], function (err, files) {
  // files = ['/folder1/file', '/folder2/file', ...];
});
```

## API

### `readdirsAbsolute(dirs, cb)`

| Name | Type | Description |
|------|------|-------------|
| dirs | `Array` | An array of directories |
| cb | `Function` | Callback function |

...

## License

MIT

[npm-url]: https://npmjs.org/package/readdirs-absolute
[npm-image]: https://badge.fury.io/js/readdirs-absolute.svg


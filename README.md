# get-assemble-layouts

[![npm version](http://img.shields.io/npm/v/get-assemble-layouts.svg?style=flat-square)](https://github.com/makotot/get-assemble-layouts)
[![travis](http://img.shields.io/travis/makotot/get-assemble-layouts.svg?style=flat-square)](https://github.com/makotot/get-assemble-layouts)
[![dependencies](http://img.shields.io/david/makotot/get-assemble-layouts.svg?style=flat-square)](https://github.com/makotot/get-assemble-layouts)
[![devDependencies](http://img.shields.io/david/dev/makotot/get-assemble-layouts.svg?style=flat-square)](https://github.com/makotot/get-assemble-layouts)
[![License](http://img.shields.io/npm/l/get-assemble-layouts.svg?style=flat-square)](https://github.com/makotot/get-assemble-layouts)

> Get [assemble](http://assemble.io/) layout files.


## Install

```sh
$ npm i --save get-assemble-layouts
```


## Usage

In assemble plugin:
```js
var getLayouts = require('get-assemble-layouts');

module.exports = function (params, cb) {

  getLayouts(params, function (err, data) {
    console.log(data);
    // => [ 'src/layouts/docs.hbs', 'src/layouts/default.hbs', ... ]
    cb();
  });
};

module.exports.options = {
  stage: 'render:post:pages'
};
```


## License

MIT

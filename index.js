var path = require('path'),
  fsUtils = require('fs-utils');

module.exports = function (params, cb) {
  var ext = 'hbs',
    assembleOptions = params.assemble.options,
    layoutDir = assembleOptions.layoutdir,
    defaultLayout = path.resolve(layoutDir, assembleOptions.defaultLayout.layoutName + '.' + ext);

  var allLayouts = assembleOptions.pages.map(function (page) {
    var filePath = page.data.layout ? path.resolve(layoutDir, page.data.layout) : defaultLayout;

    return fsUtils.relative(__dirname, filePath);
  });

  var layouts = allLayouts.filter(function (item, idx) {
    return allLayouts.indexOf(item) === idx;
  });

  cb(null, layouts);
};

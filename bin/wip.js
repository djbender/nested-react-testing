'use strict';

var _mustache = require('mustache');

var _mustache2 = _interopRequireDefault(_mustache);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _globby = require('globby');

var _globby2 = _interopRequireDefault(_globby);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

require('@instructure/ui-core/lib');

var _uiPresets = require('@instructure/ui-presets');

var loadConfig = _interopRequireWildcard(_uiPresets);

var _trimIndent = require('@instructure/ui-docs-client/lib/utils/trimIndent');

var _trimIndent2 = _interopRequireDefault(_trimIndent);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _reactDocgen = require('react-docgen');

var reactDocgen = _interopRequireWildcard(_reactDocgen);

var _grayMatter = require('gray-matter');

var _grayMatter2 = _interopRequireDefault(_grayMatter);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const { files } = loadConfig.default('components');
const docs = _globby2.default.sync(files).map(filepath => _path2.default.resolve((process.cwd(), filepath)));
const description = reactDocgen.parse(_fs2.default.readFileSync(docs[0])).description;
const content = (0, _trimIndent2.default)((0, _grayMatter2.default)(description).content);

const ignoreEls = ['Autocomplete', 'Badge', 'Dialog', 'Grid', 'InlineSVG', 'List', 'Mask', // renders fine but overflows and covers other elements
'Modal', 'Overlay', 'Pagination', 'Popover', 'PopoverMenu', 'Portal', 'Position', 'RadioInputGroup', 'SVGIcon', 'Transition', 'Tray'];

function codeBlock(content) {
  let codeBlock = [];
  const renderer = new _marked2.default.Renderer({ highlight: null });
  renderer.code = (code, _language) => {
    codeBlock.push((0, _grayMatter2.default)(code).content);
  };
  (0, _marked2.default)(content, { renderer: renderer });
  return codeBlock[0];
}

const codeBlocks = docs.reduce((arr, doc) => {
  const { description, displayName } = reactDocgen.parse(_fs2.default.readFileSync(doc));
  const { content } = (0, _grayMatter2.default)(description);
  if (ignoreEls.includes(displayName)) return arr;
  const hash = {};
  hash.displayName = displayName;
  hash.code = codeBlock((0, _trimIndent2.default)(content));
  arr.push(hash);
  return arr;
}, []);
const template = _fs2.default.readFileSync('tmpl/ComponentStuffer.mst.js');
const result = _mustache2.default.render(template.toString(), { codeBlocks, ignoreEls });

_fs2.default.writeFile('src/ComponentStuffer.js', result, error => {
  if (error) throw error;
});
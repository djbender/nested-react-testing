import Mustache from 'mustache';
import fs from 'fs';
import globby from 'globby';
import path from 'path';
import '@instructure/ui-core/lib';
import * as loadConfig from '@instructure/ui-presets';
import trimIndent from '@instructure/ui-docs-client/lib/utils/trimIndent';
import marked from 'marked';
import * as reactDocgen from 'react-docgen';
import grayMatter from 'gray-matter';

const { files } = loadConfig.default('components');
const docs = globby
  .sync(files)
  .map(filepath => path.resolve((process.cwd(), filepath)));
const description = reactDocgen.parse(fs.readFileSync(docs[0])).description;
const content = trimIndent(grayMatter(description).content);

const ignoreEls = [
  'Autocomplete',
  'Badge',
  'Dialog',
  'Grid',
  'InlineSVG',
  'List',
  'Mask', // renders fine but overflows and covers other elements
  'Modal',
  'Overlay',
  'Pagination',
  'Popover',
  'PopoverMenu',
  'Portal',
  'Position',
  'RadioInputGroup',
  'SVGIcon',
  'Transition',
  'Tray'
];

function codeBlock (content) {
  let codeBlock = [];
  const renderer = new marked.Renderer({ highlight: null });
  renderer.code = (code, _language) => { codeBlock.push(grayMatter(code).content); };
  marked(content, { renderer: renderer });
  return codeBlock[0];
}

const codeBlocks = docs.reduce((arr, doc) => {
  const { description, displayName } = reactDocgen.parse(fs.readFileSync(doc));
  const { content } = grayMatter(description);
  if (ignoreEls.includes(displayName)) return arr;
  const hash = {};
  hash.displayName = displayName
  hash.code = codeBlock(trimIndent(content));
  arr.push(hash);
  return arr;
}, []);
const template = fs.readFileSync('tmpl/ComponentStuffer.mst.js');
const result = Mustache.render(template.toString(), { codeBlocks, ignoreEls });

fs.writeFile('src/ComponentStuffer.js', result, (error) => { if (error) throw error; });

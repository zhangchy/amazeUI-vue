var Components = require('../../components.json');
var fs = require('fs');
var render = require('json-templater/string');
var path = require('path');

var OUTPUT_PATH = path.join(__dirname, '../../src/styles/style.css');
var IMPORT_TEMPLATE = '@import url(\'../../packages/{{package}}/{{name}}.css\');';
var MAIN_TEMPLATE = `{{include}}
`;

delete Components.font;
var ComponentNames = Object.keys(Components);

var includeComponentTemplate = [];

ComponentNames.forEach(name => {
  includeComponentTemplate.push(render(IMPORT_TEMPLATE, {
    name: name,
    package: name
  }));
});

var template = render(MAIN_TEMPLATE, {
  include: includeComponentTemplate.join('\n')
});

fs.writeFileSync(OUTPUT_PATH, template);
console.log('[build css] DONE:', OUTPUT_PATH);

import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = "";

    function createTag(tag, content) {
        return `<${tag}>
${Array.isArray(content) ? content.join('') : content}
</${tag}>`;
    }

    const renderTr = createTag.bind(undefined, 'tr')

    result += '<table>';
    result += '  <thead>';

    result += createTag('tr', keys.map(key => createTag('th', key)));

    result += '  </thead>';
    result += '   <tbody>'
    result += data
        .map(row => createTag('tr', keys
            .map(cell => createTag('td', row[cell]))))
    result += '   </tbody>'
    result += '</table>';




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
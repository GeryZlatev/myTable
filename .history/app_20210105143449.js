import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = '';

    function createTag(tag, content) {
        return `<${tag}>
${Array.isArray(content) ? content.join('') : content}
</${tag}>`;
    }
    const renderThead = createTag.bind(undefined, 'thead')
    const renderTbody = createTag.bind(undefined, 'tbody')
    const renderTr = createTag.bind(undefined, 'tr')
    const renderTh = createTag.bind(undefined, 'th')
    const renderTd = createTag.bind(undefined, 'td')

    result += '<table>';
    result += renderThead(renderTr(keys.map(key => renderTh(key))))
    result += '   <tbody>'
    result += data
        .map(row => renderTr(keys
            .map(cell => renderTd(row[cell])))).join('')
    result += '   </tbody>'
    result += '</table>';




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
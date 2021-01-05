import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = "";

    function createTag(tag, content) {
        return `<${tag}>${content}</${tag}>`;
    }

    result += '<table>';
    result += '  <thead>';
    result += '     <tr>';
    result += keys.map(key => createTag('th', key)).join('');
    result += '     </tr>';
    result += '  </thead>';
    result += '   <tbody>'
    result += data
        .map(row => `<tr>${ keys
            .map(cell => createTag('td', row[cell]))
            .join('')}</tr>`)
        .join('')
    result += '   </tbody>'
    result += '</table>';




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
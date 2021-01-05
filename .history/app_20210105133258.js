import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = "";

    result += '<table>';
    result += '  <thead>';
    result += '     <tr>';
    result += keys.map(key => `<div>${key}</div>`).join(' ');
    result += '     </tr>';
    result += '  </thead>';
    result += '</table>';




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
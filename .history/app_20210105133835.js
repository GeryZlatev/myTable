import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = "";

    result += '<table>';
    result += '  <thead>';
    result += '     <tr>';
    result += keys.map(key => `<th>${key}</th>`).join(' ');
    result += '     </tr>';
    result += '  </thead>';
    result += '   <tbody>'
    result += data.map(row => keys.map(cell => `<td>${row[cell]}</td>`).join('')).join('')
    result += '   </tbody>'
    result += '</table>';




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
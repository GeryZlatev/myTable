import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);
    let result = keys.map(key => `<div>${key}</div>`).join(' ');


    document.getElementById('app').innerHTML = result;

}(MOCK, document))
import { MOCK } from './MOCK_DATA.js';

(function(data) {

    console.log(Object.keys(data[0]));

}(MOCK))

document.getElementById('app').innerHTML = JSON.stringify(MOCK);
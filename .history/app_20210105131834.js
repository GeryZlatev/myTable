import { MOCK } from './MOCK_DATA.js';

(function(data) {

    console.log(Object.keys);

}(MOCK))

document.getElementById('app').innerHTML = JSON.stringify(MOCK);
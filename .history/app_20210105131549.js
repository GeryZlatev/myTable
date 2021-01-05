import { MOCK } from './MOCK_DATA.js';

(function(data) {

    console.log(data);

}(MOCK))

document.getElementById('app').innerHTML = JSON.stringify(MOCK);
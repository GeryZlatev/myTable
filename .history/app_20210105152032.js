import { MOCK } from './MOCK_DATA.js';

(function(data, document) {
    let keys = Object.keys(data[0]);

    function createTag(tag, content) {
        return `<${tag}>
${Array.isArray(content) ? content.join('') : content}
</${tag}>`;
    }

    function createSingleTag(tag, prop, val) {
        return `<${tag} ${prop}="${val}"/>`;
    }
    const renderTable = createTag.bind(undefined, 'table');
    const renderThead = createTag.bind(undefined, 'thead');
    const renderTbody = createTag.bind(undefined, 'tbody');
    const renderTr = createTag.bind(undefined, 'tr');
    const renderTh = createTag.bind(undefined, 'th');
    const renderTd = createTag.bind(undefined, 'td');

    function chooseContentType(map, wrapper, type, content) {
        if (typeof map[type] === 'function') {
            return wrapper(map[type](content))
        }

        return wrapper(content);
    }

    const fieldsMap = {
        avatar: (x) => createSingleTag('img', 'src', x),
        friends: list => {}
    }


    const defaultTd = chooseContentType.bind(
        undefined, fieldsMap, renderTd
    )


    let result = renderTable(
        renderThead(renderTr(keys.map(key => renderTh(key)))) +
        renderTbody(data
            .map(row => renderTr(keys
                .map(cell => defaultTd(cell, row[cell])))))
    )




    document.getElementById('app').innerHTML = result;

}(MOCK, document))
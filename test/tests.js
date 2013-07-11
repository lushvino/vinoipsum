var generator = require('../');
var test = require('tap').test;


test('html output', function (t) {
    t.plan(1);
    var html = generator({ s: true, count: 5, html: true});

    t.type(html, 'string')
    t.end();

});

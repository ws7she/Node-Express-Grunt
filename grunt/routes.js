var bodyParser = require('body-parser');
// 引入子进程的require
var child_process = require('child_process');
var maindata = require('./data/pack');

module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.get('/', function (req, res) {
        res.render('index', { title: 'Grunt' });
    });
    app.post('/meme', function (req, res) {
        maindata = req.body.alljs.split(",");
        // 创建子进程
        console.log(maindata)
        var worker_process = child_process.fork('gruCom.js');
        worker_process.send(maindata);
        res.send(maindata)
        res.end('is over')
    });
};
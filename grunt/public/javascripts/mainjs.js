

$(function () {
    var dataKey = "key.json";
    var setting = {
        basefile: [],
        expandfile: []
    }
    $.getJSON(dataKey, function (data) {
        setting.basefile = data.basefile;
        setting.expandfile = data.expandfile;
    });

    $("#upload").on("click", make);

    function judge(main, rely, selector) {
        if (selector.toString().indexOf(main) > -1) {
            for (var i = 0; i < rely.length; i++) {
                selector.unshift(rely[i]);
            }
        }
    }
    function make() {
        var expandjs = [], basejs = [];
        var alljs = [];

        $("input[name='basejs']").each(function () {
            if ($(this).prop('checked')) {
                basejs.push(setting.basefile + $(this).attr('value'));
            }
        });
        $("input[name='expandjs']").each(function () {
            if ($(this).prop('checked')) {
                expandjs.push(setting.expandfile + $(this).attr('value'));
            }
        });
        judge("grunt/expand/a.js", ["grunt/expand/c.js", "grunt/expand/f.js"], expandjs);
        alljs = basejs.concat(expandjs).toString();
        console.log(alljs)
        $.ajax({
            url: '/meme',
            type: 'post',
            data: ({
                alljs: alljs
            }),
            dataType: 'text',
            success: function (data) {
                console.log(data)
                setTimeout(ahhh,1000)
            },
            error: function (data) {
                console.log("失败！")
                return;
            }
        });
        function ahhh() {
            $.get('/javascripts/grunt/all_one.js', function (content, success) {
                $('#text').text(content)
            }, 'text')
        }
    }
})
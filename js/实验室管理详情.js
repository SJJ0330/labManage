

$(function () {
    
    function selectOpenTime(openTime) {
        var $openTime = $(openTime);
        // daterangepicker函数可以接受一个参数对象和一个回调函数
        $openTime.daterangepicker(
            {
                // 正确显示 HH:mm
                // timePicker: true,
                // timePicker12Hour: false, //24小时 老版本
                // timePicker24Hour: true, //24小时 新版本
                // timePickerSeconds: true,
                showDropdowns: true,
                startOfWeek: 'monday',
                autoUpdateInput: true,
                // ranges: {
                //     // '清空': [null, null],
                //     '今天': [moment().hour(4).minutes(0).seconds(0), moment().endOf('day')],
                //     '昨天': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
                //     '7天': [moment().subtract(7, 'days').startOf('day'), moment().endOf('day')],
                //     '15天': [moment().subtract(15, 'days').startOf('day'), moment().endOf('day')],
                //     '30天': [moment().subtract(30, 'days').startOf('day'), moment().endOf('day')],
                //     '这个月': [moment().startOf('month').startOf('day'), moment().endOf('month').endOf('day')],
                //     '上个月': [moment().subtract(1, 'month').startOf('month').startOf('day'), moment().subtract(1, 'month').endOf('month').endOf('day')]
                // },
                opens: 'right', //日期选择框的弹出位置
                drops: 'up',
                //buttonClasses: ['btn btn-default'],
                //applyClass: 'btn-small btn-primary blue',
                //cancelClass: 'btn-small',
                // time: {
                //     enabled: true
                // },
                // format: 'YYYY-MM-DD', 
                //pickTime: true,
                // locale是构建本地语言应用的重要参数
                locale: {
                    applyLabel: '确定',
                    cancelLabel: '取消',
                    resetLabel: "重置",
                    // fromLabel: '起始时间',
                    // toLabel: '结束时间',
                    //控件中from和to 显示的日期格式
                    format: 'YYYY-MM-DD',
                    // format: 'YYYY-MM-DD HH:mm',
                    customRangeLabel: '自定义',
                    
                    // daysOfWeek: ['日', '一', '二', '三', '四', '五', '六'],
                    // monthNames: ['一月', '二月', '三月', '四月', '五月', '六月',
                        // '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    firstDay: 1
                },
                startDate: moment().hours(4).minutes(0), //startDate和endDate 的值如果跟 ranges 的两个相同则自动选择ranges中的行. 这里选中了清空行
                endDate: moment().endOf('day')
            },
            // 回调函数会在日期更改之后触发三个参数--开始时间，结束时间以及标签名，可以在这里执行你要进行的操作如ajax请求 
            function (start, end) {
                // table框中显示的日期及格式
                var s = start.format('YYYY-MM-DD');
                var e = end.format('YYYY-MM-DD');
                // var s = start.format('YYYY-MM-DD HH:mm');
                // var e = end.format('YYYY-MM-DD HH:mm');
                var t = s + ' 至 ' + e;

                // if (start._isValid == false && end._isValid == false) {
                //     s = "";
                //     e = "";
                //     t = "请选择日期范围"
                // }

                // $openTime.find('span').html(t);
                $openTime.parent().find('.selectTime').html(t);
                
                // $openTime
                //     .next().val(s)
                //     .next().val(e);


                // $openTime.val(t);
            }
        );
    }
    // 点击“编辑”弹出时间范围选择框
    selectOpenTime('.edit');

    // $('.applyBtn').click(function(){
    //     $openTime.parent().find('.selectTime').html(t);
    // })

    // 只有添加了"selectTime"的类，才会在编辑的时候将选择的时间范围显示在对应的位置
    // 否则选择了一个时间范围后，其他已选的时间也跟着改变
    $('.edit').click(function(){
        $(this).prev().addClass('selectTime');
        $(this).parent().siblings().find('.click').removeClass('selectTime');
    })

    // 点击”删除“
    $('.del').click(function(){
        $(this).prev().addClass('deleteTime').prev().html("请选择时间范围");
        $(this).parent().siblings().find('.click').removeClass('deleteTime');
        // bug:由于点击“删除”的时候，只是修改了显示日期的元素的html,daterangepicker里还保存着上次选的日期
        // 所以当用户再次点击同一个”编辑“按钮时，还是显示上次选的时间范围，再点击”确定“时，出现的信息还是“请选择时间范围”
        // solve：当点击“删除”时，再次调用selectOpenTime('.edit');这样点击“编辑”时就可以重新选择时间范围啦。
        selectOpenTime('.edit');
    })




    // 点击保存刷新页面
    $('.rebtn').click(function(){
        window.location.reload();
        alert("数据已保存！！！");
    })

})

/**
 * Created by wang on 2016/12/5.
 */

$(document).ready(function(){

    $("#buttondenglu").click(function(){

        $('.theme-popover-mask').fadeIn(100);
        $('.theme-popover').slideDown(200);
        $('.them-top .close').click(function(){
            $('.theme-popover-mask').fadeOut(100);
            $('.theme-popover').slideUp(200);
            $('.theme-popover2').slideUp(200);
            $('.theme-popover3').slideUp(200);
        });
        $('#zhuce').click(function() {
            $(".theme-popover").css('display','none');
            $(".theme-popover2").css('display','block');
        });
        $("#returnhome").click(function(){
            $(".theme-popover").css('display','block');
            $(".theme-popover2").css('display','none');
        });
        $("#forgetpsw").click(function(){
            $(".theme-popover").css('display','none');
            $(".theme-popover3").css('display','block');
        });
    });
    $("#nav_head li").each(function(index){
        var listnode=$(this);
        $(this).click(function(){
            $("div.contener_active").removeClass("contener_active");
            $(".nav_left ul .active_li").removeClass("active_li");
            $(".contener_home").eq(index).addClass("contener_active");
            listnode.addClass("active_li");
        })
    })
});

var map = new BMap.Map("map"); // 创建地图实例
var point = new BMap.Point(117.102724,39.095127); // 创建点坐标
map.centerAndZoom(point, 17); // 初始化地图，设置中心点坐标和地图级别

/*
 1.
 NavigationControl：地图平移缩放控件，默认位于地图左上方，它包含控制地图的平移和缩放的功能。
 OverviewMapControl：缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图。
 ScaleControl：比例尺控件，默认位于地图左下方，显示地图的比例关系。
 MapTypeControl：地图类型控件，默认位于地图右上方。
 CopyrightControl：版权控件，默认位于地图左下方。
 */
//配置控件参数
//var opts = {type: BMAP_NAVIGATION_CONTROL_SMALL}
//map.addControl(new BMap.NavigationControl(opts));
/*map.addControl(new BMap.NavigationControl());*/
map.addControl(new BMap.ScaleControl());
map.addControl(new BMap.OverviewMapControl());
map.addControl(new BMap.MapTypeControl());
//map.setCurrentCity("台州");

/*
 var marker = new BMap.Marker(point);        // 创建标注
 map.addOverlay(marker);

 var opts = {
 //width : 250,     // 信息窗口宽度
 //height: 100,     // 信息窗口高度
 title : "Hello"  // 信息窗口标题
 }
 var infoWindow = new BMap.InfoWindow("World", opts);  // 创建信息窗口对象
 map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
 */
map.enableScrollWheelZoom();//滚轮缩放事件
//map.enableKeyboard(); //键盘方向键缩放事件
map.enableContinuousZoom(); // 开启连续缩放效果
//map.enableInertialDragging();　// 开启惯性拖拽效果
/*自定义搜索2*/
function serachlocal(){
    var local = new BMap.LocalSearch(map, {
        renderOptions: {
            map: map,
            panel: "results",//结果容器id
            autoViewport: true,   //自动结果标注
            selectFirstResult: true   //指定到第一个目标
        },
        pageCapacity: 8
    });
    local.search(document.getElementById("searchtext").value);
}






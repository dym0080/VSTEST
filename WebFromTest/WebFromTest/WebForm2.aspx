<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="WebFromTest.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script type="text/javascript" src="http://mapabc.zlzk.com:8081/webapi/auth.json?t=javascriptmap&amp;v=3.1.1&amp;key=82bd4c76ab57561aad61d3baf82b616e4aacf461dbc0f004854457f59fb16ab863a3a1722cef553f"></script>

</head>
<body>
    <form id="form1" runat="server">
        <div id="mapObj" style="width: 1300px; height: 900px"></div>
        <script type="text/javascript">
            var mapObj, toolbar, overview, scale;
            var opt = {
                level: 13,//初始地图视野级别
                center: new MMap.LngLat(116.397428, 39.90923),//设置地图中心点
                doubleClickZoom: true,//双击放大地图
                dragEnable:true,
                scrollwheel: true//鼠标滚轮缩放地图
            }
            mapObj = new MMap.Map("mapObj", opt);
            mapObj.plugin(["MMap.ToolBar", "MMap.OverView", "MMap.Scale"], function () {
                toolbar = new MMap.ToolBar();
                toolbar.autoPosition = false; //加载工具条
                mapObj.addControl(toolbar);
                overview = new MMap.OverView(); //加载鹰眼
                mapObj.addControl(overview);
                scale = new MMap.Scale(); //加载比例尺
                mapObj.addControl(scale);
            });

            //var arr = new Array();//经纬度坐标数组 
            //arr.push(new MMap.LngLat("116.40332221984863", "39.92025505675715"));
            //arr.push(new MMap.LngLat("116.41070365905762", "39.89755531478615"));
            //arr.push(new MMap.LngLat("116.40229225158691", "39.892353073034826"));
            //arr.push(new MMap.LngLat("116.38984680175781", "39.89136526100842"));

            //var polygon = new MMap.Polygon({ id: "polygon01", path: arr, strokeColor: "#0000ff", strokeOpacity: 0.2, strokeWeight: 3, fillColor: "#f5deb3", fillOpacity: 0.35 });

            //mapObj.addOverlays(polygon);

            //var infoWindow = new MMap.InfoWindow({ offset: new MMap.Pixel(-125, -25) });
            //infoWindow.setContent("圆");

            

            //contextMenu = new MMap.ContextMenu();
            //contextMenu.isCustom = false;
            //contextMenu.position = new MMap.LngLat("116.83322219", "39.192550567");

            //contextMenu.addItem("MapABC", function () {
            //    window.location.href = "http://www.mapabc.com";
            //}, 0);
            //contextMenu.addItem("百度", function () {
            //    window.location.href = "http://www.baidu.com";
            //}, 0);
            //mapObj.bind(mapObj, "rightclick", function (e) {
            //    contextMenu.open(mapObj, e.lnglat);
            //});
            //mapObj.bind(mapObj, "click", function (e) {
            //    infoWindow.open(mapObj, new MMap.LngLat(116.40332221984863, 39.90025505675715));
            //});

            //// mapObj.bind(polygon, "click", function (e) { infoWindow.open(mapObj, e.lnglat); })

            //var rest = new MMap.RestAPI();

            //rest.request("http://www.mapabc.com", console.log);
            var partition = new MMap.Partition();




            partition.byCity("021", function (data) {
                console.log(data);
            });












        </script>
    </form>
</body>
</html>

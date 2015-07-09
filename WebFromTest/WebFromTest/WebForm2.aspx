<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm2.aspx.cs" Inherits="WebFromTest.WebForm2" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="UTF-8">
    <title>Basic CRUD Application - jQuery EasyUI CRUD Demo</title>
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/default/easyui.css">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/icon.css">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/themes/color.css">
    <link rel="stylesheet" type="text/css" href="http://www.jeasyui.com/easyui/demo/demo.css">
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.6.min.js"></script>
    <script type="text/javascript" src="http://www.jeasyui.com/easyui/jquery.easyui.min.js"></script>
</head>
<body>
    <form id="form1" runat="server">
        <div>
            <ul class="smallicon menuItem">
                <li>
                    <div><a ref="4" href="#" rel="Dictionary/Index?navid=4"><span class="nav">字典项管理</span></a></div>
                </li>
            </ul>
        </div>
        <div>
            <ul class="smallicon menuItem">
                <li>
                    <div><a ref="2" href="#" rel="User/Index?navid=2"><span class="nav">用户管理</span></a></div>
                </li>
                <li>
                    <div><a ref="3" href="#" rel="Menu/Index?navid=3"><span class="nav">菜单管理</span></a></div>
                </li>
                <li>
                    <div><a ref="4" href="#" rel="Dictionary/Index?navid=4"><span class="nav">字典项管理</span></a></div>
                </li>
                <li>
                    <div><a ref="33" href="#" rel="DefaultRole/Index?navid=33"><span class="nav">默认权限集</span></a></div>
                </li>
                <li>
                    <div><a ref="34" href="#" rel="SimManager/Index?navid=34"><span class="nav">SIM卡管理</span></a></div>
                </li>
                <li>
                    <div><a ref="35" href="#" rel="TerminalManager/Index?navid=35"><span class="nav">GPS终端管理</span></a></div>
                </li>
                <li>
                    <div><a ref="36" href="#" rel="SimCost/Index?navid=36"><span class="nav">SIM卡费用统计</span></a></div>
                </li>
                <li>
                    <div><a ref="37" href="#" rel="UserLog/Index?navid=37"><span class="nav">用户日志</span></a></div>
                </li>
                <li>
                    <div><a ref="38" href="#" rel="VehGroup/Index?navid=38"><span class="nav">机群管理</span></a></div>
                </li>
                <li>
                    <div><a ref="39" href="#" rel="Product/Index?navid=39"><span class="nav">产品目录</span></a></div>
                </li>
                <li>
                    <div><a ref="40" href="#" rel="FeedBack/IndexForHead?navid=40"><span class="nav">在线答疑（总部或经销商）</span></a></div>
                </li>
                <li>
                    <div><a ref="41" href="#" rel="FeedBack/Index?navid=41"><span class="nav">在线答疑(用户)</span></a></div>
                </li>
                <li>
                    <div><a ref="42" href="#" rel="Company/Index?navid=42"><span class="nav">机构管理</span></a></div>
                </li>
                <li>
                    <div><a ref="43" href="#" rel="ServiceResource/Index?navid=43"><span class="nav">资源管理</span></a></div>
                </li>
                <li>
                    <div><a ref="45" href="#" rel="VehTypeModel/Index?navid=45"><span class="nav">产品组机型管理</span></a></div>
                </li>
                <li>
                    <div><a ref="46" href="#" rel="TxLog/Index?navid=46"><span class="nav">通讯日志</span></a></div>
                </li>
                <li>
                    <div><a ref="64" href="#" rel="TonXl/Index?navid=64"><span class="nav">吨位系列配置</span></a></div>
                </li>
            </ul>
        </div>

    </form>
</body>
</html>

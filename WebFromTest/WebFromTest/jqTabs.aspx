<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="jqTabs.aspx.cs" Inherits="WebFromTest.jqTabs" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="_Javascript/jquery.js"></script>
    <style type="text/css">
        .tabs {
            float: left;
            background-image: url(themes/images/nav_bg.jpg);
            width: 100%;
        }

            .tabs ul {
                list-style: none outside none;
                margin: 0;
                padding: 0;
            }

                .tabs ul li {
                    float: left;
                    line-height: 24px;
                    margin: 0;
                    padding: 2px 20px 0 15px;
                }

        .tab-nav {
            background-color:gray;
            cursor: pointer;
        }

        .tab-nav-action {
            background-color:#30BDCF;
            cursor: pointer;
        }

        .tabs-body {
            border-bottom: 1px solid #B4C9C6;
            border-left: 1px solid #B4C9C6;
            border-right: 1px solid #B4C9C6;
            float: left;
            padding: 5px 0 0;
            width: 100%;
        }

            .tabs-body div {
                padding: 10px;
            }
    </style>
    <script type="text/javascript">
        //tabs插件
        (function ($) {
            $.fn.extend({
                qmTabs: function () {
                    var aTabBodys = $('#tabs-body > div');
                    $(this).children("li").each(function (index) {
                        $(this).click(function () {
                            $(this).removeClass().addClass('tab-nav-action').siblings().removeClass().addClass('tab-nav');
                            aTabBodys.hide().eq(index).show();
                        });
                    });
                }
            });
        })(jQuery);
    </script>
    <script type="text/javascript">
        $(document).ready(function () {
            $("#tabs li").bind("click", function () {//也可以用“mousemove”的效果
                var index = $(this).index();
                var divs = $("#tabs-body > div");
                $(this).parent().children("li").attr("class", "tab-nav");//将所有选项置为未选中
                $(this).attr("class", "tab-nav-action"); //设置当前选中项为选中样式
                divs.hide();//隐藏所有选中项内容
                divs.eq(index).show(); //显示选中项对应内容
            });
        });


        $(document).ready(function () {
            $("#tabs").qmTabs();
        });
    </script>
</head>
<body>
    <form id="form1" runat="server">
        <div class="tabs">
            <ul id="tabs">
                <li class="tab-nav">管理导航</li>
                <li class="tab-nav-action">系统设置</li>
                <li class="tab-nav">用户管理</li>
                <li class="tab-nav">内容管理</li>
                <li class="tab-nav">其他管理</li>
            </ul>
        </div>
        <div id="tabs-body" class="tabs-body">
            <div style="display: block">
                1111111
            </div>
            <div style="display: none">
                222222222
            </div>
            <div style="display: none">
                33333333333
            </div>
            <div style="display: none">
                4444444444
            </div>
            <div style="display: none">
                555555555555555
            </div>
        </div>
    </form>
</body>
</html>

﻿<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebFromTest.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title></title>
    <script src="_Javascript/jquery.js"></script>
    <style type="text/css">
        #rdxw {
            width: 358px;
            height: 343px;
            border: #CCCCCC 1px solid;
            float: left;
            background: url(ba_011.gif) no-repeat;
            display: inline;
        }

            #rdxw .title {
                width: 358px;
                height: 30px;
                line-height: 30px;
            }

            #rdxw .news {
                width: 358px;
                height: 313px;
                display: block;
            }

                #rdxw .news ul {
                    width: 340px;
                    margin: 0;
                    padding: 0;
                    margin: 0 auto;
                    margin-top: 15px;
                }

                #rdxw .news li {
                    line-height: 18px;
                    text-align: left;
                    list-style-type: none;
                    white-space: nowrap;
                    overflow: hidden;
                    width: 308px;
                    font-size: 14px;
                    color: #666;
                }

            #rdxw a {
                text-decoration: none;
            }

            #rdxw ul {
                list-style-type: none;
                float: right;
                margin: 0;
                padding: 0;
            }

            #rdxw .title li {
                width: 75px;
                height: 28px;
                float: left;
                list-style-type: none;
                white-space: nowrap;
                line-height: 28px;
                margin-top: 2px;
                text-align: center;
                font-size: 14px;
                font-weight: bold;
                cursor: pointer;
            }

            #rdxw .title a {
                color: #666666;
            }

            #rdxw .t_title {
                float: left;
                background: url(ba_012.gif);
                width: 75px;
                height: 28px;
            }

                #rdxw .t_title a {
                    color: #FFFFFF;
                }

            #rdxw .title a:hover {
                text-decoration: none;
                cursor: pointer;
                color: #FFFFFF;
            }
    </style>

    <script type="text/javascript">
        //Tabs
        $(function () {
            var $title = $(".title ul li");
            var $content = $("#rdxw .news");
            $(".title").mousemove(function () {
                var index = $title.index($(this));
                $(this).addClass("t_title").siblings().removeClass("t_title");
                $content.hide();
                $($content.get(index)).show();
                return false;
            });
        });
    </script>

</head>
<body>
    <form id="form1" runat="server">
        <div id="rdxw">
            <div class="title">
                <ul>
                    <li id="rdxw_title" class="t_title"><a href="#">11111</a></li>
                    <li id="hyzx_title"><a href="#">22222</a></li>
                </ul>
            </div>
            <div class="news">
                <ul>
                    <li><a href="#">111111</a></li>
                    <li><a href="#">111111</a></li>
                    <li><a href="#">111111</a></li>
                    <li><a href="#">111111</a></li>
                    <li><a href="#">111111</a></li>
                    <li><a href="#">111111</a></li>
                </ul>
            </div>
            <div class="news" style="display: none;">
                <ul>
                    <li><a href="#">222222</a></li>
                    <li><a href="#">222222</a></li>
                    <li><a href="#">222222</a></li>
                    <li><a href="#">222222</a></li>
                    <li><a href="#">222222</a></li>
                    <li><a href="#">222222</a></li>
                </ul>
            </div>
        </div>
    </form>
</body>
</html>


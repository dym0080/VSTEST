<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="WebForm1.aspx.cs" Inherits="WebFromTest.WebForm1" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title></title>
   
</head>
<body>
    <form id="form1" runat="server">
    <div>
    <label>1111111111</label>
        <a href="dafd/DAD.aspx" target="_blank" onclick="javascript:alter('2')"><img alt="" src="images/index-alarm.png"/></a>
        <asp:Button ID="Button1" runat="server" Text="Button" OnClick="Button1_Click" />
        <asp:Literal ID="Literal1" runat="server"></asp:Literal>

    </div>
    </form>
</body>
</html>
 <script type="text/javascript">
     function JumpToUrl(num,URL){
         window.top.location.href=URL;
     }
    </script>

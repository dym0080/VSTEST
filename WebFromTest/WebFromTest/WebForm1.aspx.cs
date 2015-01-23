using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace WebFromTest
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Literal1.Text = "<a href=\"#\" onclick=\"JumpToUrl(2,'<%=ResolveUrl(\"dafd/DAD.aspx\")%>')\"><img alt=\"\" src=\"images/index-alarm.png\"/></a>";
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
        }
    }
}
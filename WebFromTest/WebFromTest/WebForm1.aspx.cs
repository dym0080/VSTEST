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
            
            DateTime serviceEnd = Convert.ToDateTime("2012-11-20 13:00:59").AddMonths(Convert.ToInt32(999));
            string sa = string.Empty;
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
        }
    }
}
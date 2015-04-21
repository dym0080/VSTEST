using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MyMVCStudyThree.Controllers
{
    public class HelloWorldController : Controller
    {
        //
        // GET: /HelloWorld/
        //public ActionResult Index()
        //{
        //    return View();
        //}

        public string Index()
        {
            return "this is <b>default </b> action";
        }

        public string Welcome(string name,int ID=1)
        {
            //return "this is Welcome action method";
            return HttpUtility.HtmlEncode("Hello " + name + " ,ID is " + ID);
        }
	}
}
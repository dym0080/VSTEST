using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SlarkInc.Controllers
{
    public class DefaultControllerController : Controller
    {
        //
        // GET: /DefaultController/
        public ActionResult DefaultAction()
        {
            return View();
        }
	}
}
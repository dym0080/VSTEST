using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace SlarkInc.Controllers
{
    public class FirstController : Controller
    {
        //
        // GET: /First/
        public ActionResult Index()
        {
            ViewBag.Number = 8;
            ViewBag.Message = "this is index page";
            ViewBag.Slarks = new List<string> { "Slarks1", "Slarks2", "Slarks3" };
            return View();
        }
        
	}
}
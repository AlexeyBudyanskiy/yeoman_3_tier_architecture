using System.Web.Mvc;

namespace <%= SolutionName %>.WEB.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }
    }
}
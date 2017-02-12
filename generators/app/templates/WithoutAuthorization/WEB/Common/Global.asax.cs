using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using <%= SolutionName %>.WEB.AutomapperRegistrations;

namespace <%= SolutionName %>.WEB
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            AutoMapperConfiguration.Configure();
            BundleConfig.RegisterBundles(BundleTable.Bundles);
        }
    }
}

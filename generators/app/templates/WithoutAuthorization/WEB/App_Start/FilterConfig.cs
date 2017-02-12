using System.Web.Mvc;
using <%= SolutionName %>.WEB.Filters;

namespace <%= SolutionName %>.WEB
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new LogIpFilterAttribute());
            filters.Add(new PerfomanceFilterAttribute());
            filters.Add(new LogActionFilterAttribute());
        }
    }
}

using System.Configuration;

namespace <%= SolutionName %>.WEB.Infrastructure
{
    public class GlobalVaribles
    {
        public static string ExampleVariable => ConfigurationManager.AppSettings["Example"];
    }
}
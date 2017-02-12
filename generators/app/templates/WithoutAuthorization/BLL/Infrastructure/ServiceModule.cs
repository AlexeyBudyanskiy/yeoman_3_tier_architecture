using Ninject.Modules;
using <%= SolutionName %>.DAL.Interfaces;
using <%= SolutionName %>.DAL.UnitsOfWork;

namespace <%= SolutionName %>.BLL.Infrastructure
{
    public class ServiceModule : NinjectModule
    {
        private readonly string _connectionString;

        public ServiceModule(string connectionString)
        {
            _connectionString = connectionString;
        }

        public override void Load()
        {
            Bind<IUnitOfWork>().To<UnitOfWork>().WithConstructorArgument(_connectionString);
        }
    }
}

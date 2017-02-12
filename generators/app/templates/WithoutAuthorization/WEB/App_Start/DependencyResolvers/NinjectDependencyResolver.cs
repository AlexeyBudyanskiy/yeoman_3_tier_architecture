using System;
using System.Collections.Generic;
using System.Web.Mvc;
using Ninject;
using NLog;
using <%= SolutionName %>.BLL.Interfaces;
using <%= SolutionName %>.BLL.Services;

namespace <%= SolutionName %>.WEB.DependencyResolvers
{
    public class NinjectDependencyResolver : IDependencyResolver
    {
        private readonly IKernel _kernel;
        public NinjectDependencyResolver(IKernel kernelParam)
        {
            _kernel = kernelParam;
            AddBindings();
        }

        public object GetService(Type serviceType)
        {
            return _kernel.TryGet(serviceType);
        }

        public IEnumerable<object> GetServices(Type serviceType)
        {
            return _kernel.GetAll(serviceType);
        }

        private void AddBindings()
        {
            _kernel.Bind<IExampleService>().To<ExampleService>();
<% for(var i = 0; i < Entities.length; i++){ %>
			_kernel.Bind<I<%= Entities[i] %>Service>().To<<%= Entities[i] %>Service>();
<% } %>

            _kernel.Bind<ILogger>().ToMethod(p =>
            {
                if (p.Request.Target != null && p.Request.Target.Member.DeclaringType != null)
                {
                    return LogManager.GetLogger(p.Request.Target.Member.DeclaringType.ToString());
                }

                return LogManager.GetLogger("Filter logging");
            });
        }
    }
}
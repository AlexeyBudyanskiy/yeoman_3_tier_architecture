using AutoMapper;
using <%= SolutionName %>.BLL.Infrastructure.AutomapperRegistration;

namespace <%= SolutionName %>.WEB.AutomapperRegistrations
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.AddProfile(new ViewModelToDtoProfile());
                cfg.AddProfile(new DtoToViewModelProfile());

                cfg.AddProfile(new DtoToEntityProfile());
                cfg.AddProfile(new EnitityToDtoProfile());
            });
        }
    }
}
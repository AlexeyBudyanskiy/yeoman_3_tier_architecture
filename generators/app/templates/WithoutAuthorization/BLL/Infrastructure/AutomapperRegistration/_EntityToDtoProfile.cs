using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.BLL.Infrastructure.AutomapperRegistration
{
    public class EntityToDtoProfile : Profile
    {
        public EnitityToDtoProfile()
        {
            CreateMap<Example, ExampleDto>();        
        }
    }
}

using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.BLL.Infrastructure.AutomapperRegistration
{
    public class DtoToEntityProfile : Profile
    {
        public DtoToEntityProfile()
        {
            CreateMap<ExampleDto, Example>();
        }
    }
}

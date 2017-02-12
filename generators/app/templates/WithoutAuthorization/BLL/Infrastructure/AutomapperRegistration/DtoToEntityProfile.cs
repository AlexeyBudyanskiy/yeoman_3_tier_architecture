using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.BLL.Infrastructure.AutomapperRegistration
{
    public class DtoToEntityProfile : Profile
    {
        public DtoToEntityProfile()
        {
<% for(var i = 0; i < Entities.length; i++){ %>
			CreateMap<<%= Entities[i] %>Dto, <%= Entities[i] %>>();
<% } %>
            CreateMap<ExampleDto, Example>();
        }
    }
}

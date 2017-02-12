using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.BLL.Infrastructure.AutomapperRegistration
{
    public class EntityToDtoProfile : Profile
    {
        public EntityToDtoProfile()
        {
<% for(var i = 0; i < Entities.length; i++){ %>
			CreateMap<<%= Entities[i] %>, <%= Entities[i] %>Dto>();
<% } %>
            CreateMap<Example, ExampleDto>();        
        }
    }
}

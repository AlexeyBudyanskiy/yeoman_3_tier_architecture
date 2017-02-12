using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.WEB.ViewModels;

namespace <%= SolutionName %>.WEB.AutomapperRegistrations
{
    public class DtoToViewModelProfile : Profile
    {
        public DtoToViewModelProfile()
        {
            CreateMap<ExampleDto, ExampleViewModel>();
<% for(var i = 0; i < Entities.length; i++){ %>
			CreateMap<<%= Entities[i] %>Dto, <%= Entities[i] %>ViewModel>();
<% } %>
        }
    }
}
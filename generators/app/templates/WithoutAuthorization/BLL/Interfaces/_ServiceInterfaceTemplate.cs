using System.Collections.Generic;
using <%= SolutionName %>.BLL.DTO;

namespace <%= SolutionName %>.BLL.Interfaces
{
    public interface I<%= Entity %>Service
    {
        <%= Entity %>Dto Get(int id);
        IEnumerable<<%= Entity %>Dto> GetAll();
        void Create(<%= Entity %>Dto <%= Entity.toLowerCase() %>Dto);
        void Edit(<%= Entity %>Dto <%= Entity.toLowerCase() %>Dto);
        void Delete(int id);
    }
}

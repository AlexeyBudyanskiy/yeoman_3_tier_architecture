using System.Collections.Generic;
using <%= SolutionName %>.BLL.DTO;

namespace <%= SolutionName %>.BLL.Interfaces
{
    public interface IExampleService
    {
        ExampleDto Get(int id);
        IEnumerable<ExampleDto> GetAll();
        void Create(ExampleDto exampleDto);
        void Edit(ExampleDto exampleDto);
        void Delete(int id);
    }
}

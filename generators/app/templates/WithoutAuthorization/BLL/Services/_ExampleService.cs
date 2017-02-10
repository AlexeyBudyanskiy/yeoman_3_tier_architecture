using AutoMapper;
using System.Collections.Generic;
using System.Linq;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.BLL.Exceptions;
using <%= SolutionName %>.BLL.Interfaces;
using <%= SolutionName %>.DAL.Entities;
using <%= SolutionName %>.DAL.Interfaces;

namespace <%= SolutionName %>.BLL.Services
{
    public class ExampleService : IExampleService
    {
        private readonly IUnitOfWork _unitOfWork;

        public ExampleService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        
        public ExampleDto Get(int id)
        {
            var example = _unitOfWork.Examples.Get(id);
            var exampleDto = Mapper.Map<ExampleDto>(example);

            return exampleDto;
        }

        public IEnumerable<ExampleDto> GetAll()
        {
            var examples = _unitOfWork.Examples.GetAll().ToList();
            var examplesDto = Mapper.Map<IEnumerable<ExampleDto>>(examples);

            return examplesDto;
        }

        public void Create(ExampleDto exampleDto)
        {
            var example = Mapper.Map<Example>(exampleDto);

            _unitOfWork.Examples.Create(example);
            _unitOfWork.Save();
        }

        public void Edit(ExampleDto exampleDto)
        {
            var updatingExample = _unitOfWork.Examples.Get(exampleDto.Id);

            if (updatingExample == null)
            {
                throw new EntityNotFoundException($"There is no Exampke with id { exampleDto.Id } in the database.", "Example");
            }

            Mapper.Map(exampleDto, updatingExample);

            _unitOfWork.Examples.Update(updatingExample);
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            _unitOfWork.Examples.Delete(id);
            _unitOfWork.Save();
        }
    }
}

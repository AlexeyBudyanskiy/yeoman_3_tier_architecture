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
    public class <%= Entity %>Service : I<%= Entity %>Service
    {
        private readonly IUnitOfWork _unitOfWork;

        public <%= Entity %>Service(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }
        
        public <%= Entity %>Dto Get(int id)
        {
            var <%= Entity.toLowerCase() %> = _unitOfWork.<%= Entity %>s.Get(id);
            var <%= Entity.toLowerCase() %>Dto = Mapper.Map<<%= Entity %>Dto>(<%= Entity.toLowerCase() %>);

            return <%= Entity.toLowerCase() %>Dto;
        }

        public IEnumerable<<%= Entity %>Dto> GetAll()
        {
            var <%= Entity.toLowerCase() %>s = _unitOfWork.<%= Entity %>s.GetAll().ToList();
            var <%= Entity.toLowerCase() %>sDto = Mapper.Map<IEnumerable<<%= Entity %>Dto>>(<%= Entity.toLowerCase() %>s);

            return <%= Entity.toLowerCase() %>sDto;
        }

        public void Create(<%= Entity %>Dto <%= Entity.toLowerCase() %>Dto)
        {
            var <%= Entity.toLowerCase() %> = Mapper.Map<<%= Entity %>>(<%= Entity.toLowerCase() %>Dto);

            _unitOfWork.<%= Entity %>s.Create(<%= Entity.toLowerCase() %>);
            _unitOfWork.Save();
        }

        public void Edit(<%= Entity %>Dto <%= Entity.toLowerCase() %>Dto)
        {
            var updating<%= Entity %> = _unitOfWork.<%= Entity %>s.Get(<%= Entity.toLowerCase() %>Dto.Id);

            if (updating<%= Entity %> == null)
            {
                throw new EntityNotFoundException($"There is no <%= Entity %> with id { <%= Entity.toLowerCase() %>Dto.Id } in the database.", "<%= Entity %>");
            }

            Mapper.Map(<%= Entity.toLowerCase() %>Dto, updating<%= Entity %>);

            _unitOfWork.<%= Entity %>s.Update(updating<%= Entity %>);
            _unitOfWork.Save();
        }

        public void Delete(int id)
        {
            _unitOfWork.<%= Entity %>s.Delete(id);
            _unitOfWork.Save();
        }
    }
}
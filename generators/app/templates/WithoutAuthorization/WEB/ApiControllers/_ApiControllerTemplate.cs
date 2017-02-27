using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web.Http;
using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.BLL.Interfaces;
using <%= SolutionName %>.WEB.ViewModels;

namespace <%= SolutionName %>.WEB.ApiControllers
{
    [RoutePrefix("api/<%= Entity.toLowerCase() %>s")]
    public class Api<%= Entity %>Controller : ApiController
    {
        private readonly I<%= Entity %>Service _<%= Entity.toLowerCase() %>Service;

        public Api<%= Entity %>Controller(I<%= Entity %>Service <%= Entity.toLowerCase() %>Service)
        {
            _<%= Entity.toLowerCase() %>Service = <%= Entity.toLowerCase() %>Service;
        }

        [HttpGet, Route("")]
        public IHttpActionResult GetAll()
        {
            var <%= Entity.toLowerCase() %>sDto = _<%= Entity.toLowerCase() %>Service.GetAll();
            var <%= Entity.toLowerCase() %>sViewModel = Mapper.Map<IEnumerable<<%= Entity %>ViewModel>>(<%= Entity.toLowerCase() %>sDto).ToList();

            return Ok(<%= Entity.toLowerCase() %>sViewModel);
        }

        [HttpGet, Route("{id:int}")]
        public IHttpActionResult Get(int id)
        {
                var <%= Entity.toLowerCase() %>Dto = _<%= Entity.toLowerCase() %>Service.Get(id);
                var <%= Entity.toLowerCase() %>ViewModel = Mapper.Map<<%= Entity %>ViewModel>(<%= Entity.toLowerCase() %>Dto);

                return Ok(<%= Entity.toLowerCase() %>ViewModel);
        }

        [HttpPost, Route("")]
        public IHttpActionResult Create(<%= Entity %>ViewModel <%= Entity.toLowerCase() %>ViewModel)
        {
            if (ModelState.IsValid)
            {
                var <%= Entity.toLowerCase() %>Dto = Mapper.Map<<%= Entity %>Dto>(<%= Entity.toLowerCase() %>ViewModel);
                _<%= Entity.toLowerCase() %>Service.Create(<%= Entity.toLowerCase() %>Dto);

                return StatusCode(HttpStatusCode.Created);
            }

            return BadRequest(ModelState);
        }

        [HttpPut, Route("")]
        public IHttpActionResult Edit(<%= Entity %>ViewModel <%= Entity.toLowerCase() %>ViewModel)
        {
            if (ModelState.IsValid)
            {
                var <%= Entity.toLowerCase() %>Dto = Mapper.Map<<%= Entity %>Dto>(<%= Entity.toLowerCase() %>ViewModel);
                _<%= Entity.toLowerCase() %>Service.Edit(<%= Entity.toLowerCase() %>Dto);

                return Ok();
            }

            return BadRequest(ModelState);
        }

        [HttpDelete, Route("{id:int}")]
        public IHttpActionResult Delete(int id)
        {
            _<%= Entity.toLowerCase() %>Service.Delete(id);

            return Ok();
        }
    }
}
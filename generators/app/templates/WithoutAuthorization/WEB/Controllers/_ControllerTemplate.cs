using System.Collections.Generic;
using System.Web.Mvc;
using AutoMapper;
using <%= SolutionName %>.BLL.DTO;
using <%= SolutionName %>.BLL.Interfaces;
using <%= SolutionName %>.WEB.ViewModels;

namespace <%= SolutionName %>.WEB.Controllers
{
    public class <%= Entity %>Controller : Controller
    {
        private readonly I<%= Entity %>Service _<%= Entity.toLowerCase() %>Service;

        public <%= Entity %>Controller(I<%= Entity %>Service <%= Entity.toLowerCase() %>Service)
        {
            _<%= Entity.toLowerCase() %>Service = <%= Entity.toLowerCase() %>Service;
        }

        [HttpGet]
        public ActionResult GetAll()
        {
            var <%= Entity.toLowerCase() %>sDto = _<%= Entity.toLowerCase() %>Service.GetAll();
            var <%= Entity.toLowerCase() %>sViewModel = Mapper.Map<IEnumerable<<%= Entity %>ViewModel>>(<%= Entity.toLowerCase() %>sDto);

            return View(<%= Entity.toLowerCase() %>sViewModel);
        }

        [HttpGet]
        public ActionResult Get(int id)
        {
            var <%= Entity.toLowerCase() %>Dto = _<%= Entity.toLowerCase() %>Service.Get(id);
            var <%= Entity.toLowerCase() %>ViewModel = Mapper.Map<<%= Entity %>ViewModel>(<%= Entity.toLowerCase() %>Dto);

            return View(<%= Entity.toLowerCase() %>ViewModel);
        }

        [HttpGet]
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(<%= Entity %>ViewModel <%= Entity.toLowerCase() %>ViewModel)
        {
            if (!ModelState.IsValid)
            {
                return View(<%= Entity.toLowerCase() %>ViewModel);
            }

            var <%= Entity.toLowerCase() %>Dto = Mapper.Map<<%= Entity %>Dto>(<%= Entity.toLowerCase() %>ViewModel);
            _<%= Entity.toLowerCase() %>Service.Create(<%= Entity.toLowerCase() %>Dto);

            return RedirectToAction("Index", "Home");
        }

        public ActionResult Edit(int id)
        {
            var <%= Entity.toLowerCase() %>Dto = _<%= Entity.toLowerCase() %>Service.Get(id);
            var <%= Entity.toLowerCase() %>ViewModel = Mapper.Map<<%= Entity %>ViewModel>(<%= Entity.toLowerCase() %>Dto);

            return View(<%= Entity.toLowerCase() %>ViewModel);
        }

        [HttpPost]
        public ActionResult Edit(<%= Entity %>ViewModel <%= Entity.toLowerCase() %>ViewModel)
        {
            if (!ModelState.IsValid)
            {
                return View(<%= Entity.toLowerCase() %>ViewModel);
            }

            var <%= Entity.toLowerCase() %>Dto = Mapper.Map<<%= Entity %>Dto>(<%= Entity.toLowerCase() %>ViewModel);
            _<%= Entity.toLowerCase() %>Service.Edit(<%= Entity.toLowerCase() %>Dto);

            return RedirectToAction("Index", "Home");
        }

        public ActionResult Delete(int id)
        {
            _<%= Entity.toLowerCase() %>Service.Delete(id);

            return RedirectToAction("Index", "Home");
        }
    }
}
using System;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    { 
        IRepository<Example> Examples { get; }
<% for(var i = 0; i < Entities.length; i++){ %>
		IRepository<<%= Entities[i] %>> <%= Entities[i] %>s { get; }
<% } %>
        void Save();
    }
}

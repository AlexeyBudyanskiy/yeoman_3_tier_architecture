using System;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.DAL.Interfaces
{
    public interface IUnitOfWork : IDisposable
    { 
        IRepository<Example> Examples { get; }
       
        void Save();
    }
}

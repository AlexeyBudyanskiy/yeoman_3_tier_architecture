﻿namespace <%= SolutionName %>.BLL.Exceptions
{
    public class EntityNotFoundException : EntityException
    {     
        public EntityNotFoundException(string message, string entity) : base(message, entity)
        {
        }
    }
}

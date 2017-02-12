using System.ComponentModel.DataAnnotations;

namespace <%= SolutionName %>.DAL.Entities
{
    public class BaseType
    {
        [Key]
        public int Id { get; set; }
    }
}

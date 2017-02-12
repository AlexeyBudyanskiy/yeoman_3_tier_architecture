using System.Data.Entity;
using <%= SolutionName %>.DAL.Entities;

namespace <%= SolutionName %>.DAL.EF
{
    public class DatabaseContext : DbContext
    {
        static DatabaseContext()
        {
            Database.SetInitializer(new StoreDbInitializer());
        }

        public DatabaseContext(string connectionString) : base(connectionString)
        {
        }
<% for(var i = 0; i < Entities.length; i++){ %>
		public DbSet<<%= Entities[i] %>> <%= Entities[i] %>s { get; set; }
<% } %>
        public DbSet<Example> Examples { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}

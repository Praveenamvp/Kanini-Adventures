using Microsoft.EntityFrameworkCore;
using System.Numerics;

namespace LoginAPI.Models
{
    public class Context:DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Agent> Agents { get; set; }
        public DbSet<Traveler> Travelers { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
         


        }

    }
}

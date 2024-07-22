using Microsoft.EntityFrameworkCore;

namespace TourAPI.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Tour> Tour { get; set; }
        public DbSet<Inclusions> Inclusions { get; set; }
        public DbSet<Exclusions> Exclusions { get; set; }
        public DbSet<TourInclusions> TourInclusions { get; set; }
        public DbSet<TourExclusions> TourExclusions { get; set; }
        public DbSet<TourItinerary> TourItinerary { get; set; }
        public DbSet<TourDates> TourDates { get; set; }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {



        }

    }
}

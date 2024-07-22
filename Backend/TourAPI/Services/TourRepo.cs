using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using TourAPI.Interfaces;
using TourAPI.Models;

namespace TourAPI.Services
{
    public class TourRepo : IRepo<int, Tour>
    {
        private readonly Context _context;
        private readonly ILogger<TourRepo> _logger;

        public TourRepo(Context context, ILogger<TourRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Tour?> Add(Tour item)
        {
            var transaction = _context.Database.BeginTransaction();

            try
            {
                _context.Tour.Add(item);
                await _context.SaveChangesAsync();
                transaction.Commit();

                return item;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                transaction.Rollback();



            }
            return null;
        }

        public async  Task<Tour?> Delete(int key)
        {
            var transaction = _context.Database.BeginTransaction();

            Tour tour = await Get(key);
            if (tour != null)
            {
                try
                {
                    _context.Remove(tour);
                    await _context.SaveChangesAsync();
                    transaction.Commit();


                    return tour;
                }
                catch (Exception ex)
                {
                    _logger.LogError(ex.Message);
                    transaction.Rollback();



                }
            }

            return null;
        }

        public async  Task<Tour?> Get(int key)
        {
            try
            {
                var tour = await _context.Tour.Include(c => c.TourDates).Include(c => c.TourExclusions).Include(c => c.TourInclusions)
                   .Include(c => c.TourItinerary).FirstOrDefaultAsync(u => u.TourId == key);
                return tour;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async  Task<ICollection<Tour>?> GetAll()
        {
            try
            {
                var tour = await _context.Tour.Include(c => c.TourExclusions).Include(c => c.TourInclusions)
                    .Include(c => c.TourItinerary).ToListAsync();
                return tour;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<Tour?> Update(Tour item)
        {
            var transaction = _context.Database.BeginTransaction();

            try
            {
                Tour? tour = await Get(item.TourId);
                if (tour != null)
                {
                    tour.TourDescription=item.TourDescription;
                    tour.TourPrice=item.TourPrice;
                    tour.NoOfDays=item.NoOfDays;
                    tour.NoOfNights=item.NoOfNights;
                    tour.TourExclusions=item.TourExclusions;
                    tour.TourInclusions=item.TourInclusions;
                    tour.TourItinerary = item.TourItinerary;
                    tour.TourDates=item.TourDates;

                    await _context.SaveChangesAsync();
                    transaction.Commit();

                }
                return tour;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);
                transaction.Rollback();

                return null;

            }
        }
    }
}

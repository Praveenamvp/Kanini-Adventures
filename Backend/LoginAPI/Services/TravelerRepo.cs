using LoginAPI.Interfaces;
using LoginAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace LoginAPI.Services
{
    public class TravelerRepo:IRepo<int, Traveler>
    {
        private readonly Context _context;
        private readonly ILogger<TravelerRepo> _logger;

        public TravelerRepo(Context context, ILogger<TravelerRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Traveler?> Add(Traveler item)
        {
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Traveler");

                    _context.Travelers.Add(item);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return item;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Traveler");
                }
                return null;
            }
        }
        public async Task<Traveler?> Delete(int key)
        {
            Traveler traveler = await Get(key);
            {
                var transaction = _context.Database.BeginTransaction();
                try
                {
                    transaction.CreateSavepoint("Traveler");
                    _context.Travelers.Remove(traveler);
                    _context.Users.Remove(traveler.User);
                    await _context.SaveChangesAsync();
                    transaction.Commit();
                    return traveler;
                }
                catch (Exception)
                {
                    transaction.RollbackToSavepoint("Traveler");
                }
                return null;
            }
        }

        public async Task<Traveler?> Get(int key)
        {
            try
            {
                Traveler traveler = await _context.Travelers.Include(u => u.User).FirstOrDefaultAsync(u => u.Id == key);
                return traveler;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Traveler>?> GetAll()
        {
            try
            {
                ICollection<Traveler> traveler = await _context.Travelers.ToListAsync();
                return traveler;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<Traveler?> Update(Traveler item)
        {
            Traveler traveler = await Get(item.Id);
            if (traveler != null)
            {
                traveler.UserName=item.UserName;
                traveler.MobileNumber=item.MobileNumber;

                await _context.SaveChangesAsync();
                return traveler;

            }
            return null;
        }
    }
}

using Microsoft.EntityFrameworkCore;
using TourAPI.Interfaces;
using TourAPI.Models;

namespace TourAPI.Services
{
    public class ExclutsionsRepo : IBaseRepo<int, Exclusions>
    {
        private readonly Context _context;
        private readonly ILogger<ExclutsionsRepo> _logger;

        public ExclutsionsRepo(Context context, ILogger<ExclutsionsRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Exclusions?> Get(int key)
        {
            try
            {
                Exclusions exclutions = await _context.Exclusions.FirstOrDefaultAsync(u => u.ExclusionId == key);
                return exclutions;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Exclusions>?> GetAll()
        {
            try
            {
                ICollection<Exclusions> exclutions = await _context.Exclusions.ToListAsync();
                return exclutions;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }
    }
}

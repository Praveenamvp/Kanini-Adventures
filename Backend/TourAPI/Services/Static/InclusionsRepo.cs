using Microsoft.EntityFrameworkCore;
using TourAPI.Interfaces;
using TourAPI.Models;

namespace TourAPI.Services
{
    public class InclusionsRepo:IBaseRepo<int,Inclusions>
    {
        private readonly Context _context;
        private readonly ILogger<InclusionsRepo> _logger;

        public InclusionsRepo(Context context, ILogger<InclusionsRepo> logger)
        {
            _context = context;
            _logger = logger;
        }
        public async Task<Inclusions?> Get(int key)
        {
            try
            {
                Inclusions inclusions = await _context.Inclusions.FirstOrDefaultAsync(u => u.InclusionId == key);
                return inclusions;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }

        public async Task<ICollection<Inclusions>?> GetAll()
        {
            try
            {
                ICollection<Inclusions> inclusions = await _context.Inclusions.ToListAsync();
                return inclusions;

            }
            catch (Exception ex)
            {
                _logger.LogError(ex.Message);

            }
            return null;
        }
    }
}

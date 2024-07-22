using TourAPI.Interfaces;
using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Services.Static
{
    public class DropDownServices : IDropDownRepo
    {
        private readonly IBaseRepo<int, Exclusions> _exclusionRepo;
        private readonly IBaseRepo<int, Inclusions> _inclusionRepo;

        public DropDownServices(IBaseRepo<int,Exclusions> exclusionRepo, IBaseRepo<int, Inclusions> inclusionRepo) {
            _exclusionRepo = exclusionRepo;
            _inclusionRepo=inclusionRepo;


        }
        public async Task<ICollection<Exclusions>?> GetAllExclusions()
        {
            return await _exclusionRepo.GetAll();
        }

        public async Task<ICollection<Inclusions>?> GetAllInclusions()
        {
            return await _inclusionRepo.GetAll();
        }

       

     
    }
}

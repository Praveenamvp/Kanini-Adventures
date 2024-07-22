using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Interfaces
{
    public interface IManageTour
    {
        public Task<Tour> AddTourpackage(Tour item);
        public Task<TourDetailsDTO> GetTourpackage(IdDTO key);

        public Task<bool> UpdateTourpackage(Tour item);

        public Task<ICollection<Tour>> GetAllTourPackages();
        public Task<ICollection<TourDetailsDTO>> GetAllTourPackagesData();
        public Task<bool> UpdateCount(TourDTO item);



    }
}

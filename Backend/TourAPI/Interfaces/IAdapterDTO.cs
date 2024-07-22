using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Interfaces
{
    public interface IAdapterDTO
    {
        public Task<ICollection<TourDetailsDTO>> TourIntoTourDTO(ICollection<Tour> tour);
        public Task<TourDetailsDTO> TourIntoTourDTO(Tour tour);


    }
}

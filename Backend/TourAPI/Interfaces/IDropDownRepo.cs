using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Interfaces
{
    public interface IDropDownRepo
    {

        public Task<ICollection<Exclusions>> GetAllExclusions();
        

        public Task<ICollection<Inclusions>> GetAllInclusions();
    }
}

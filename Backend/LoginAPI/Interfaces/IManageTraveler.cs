using LoginAPI.Models.DTO;
using LoginAPI.Models;

namespace LoginAPI.Interfaces
{
    public interface IManageTraveler
    {
        public Task<Traveler> AddTraveler(TravelerDTO item);
        public Task<ICollection<Traveler>> GetAllTraveler();
        public Task<Traveler> GetTraveler(IdDTO item);


    }
}

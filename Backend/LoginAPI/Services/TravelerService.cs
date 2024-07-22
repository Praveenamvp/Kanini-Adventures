using LoginAPI.Interfaces;
using LoginAPI.Models;
using LoginAPI.Models.DTO;
using System.Security.Cryptography;
using System.Text;

namespace LoginAPI.Services
{
    public class TravelerService : IManageTraveler
    {
        private readonly IRepo<int, Traveler> _repo;
        private readonly ITokenGenerate _tokenGenerate;

        public TravelerService(IRepo<int, Traveler> travelerRepo, ITokenGenerate tokenGenerate)
        {
            _repo = travelerRepo;
            _tokenGenerate = tokenGenerate;
        }
        public async Task<Traveler> AddTraveler(TravelerDTO item)
        {
            var hmac = new HMACSHA512();
            item.User.PasswordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(item.PasswordString ?? ""));
            item.User.PasswordKey = hmac.Key;
            item.User.Role = "traveler";


            Traveler traveler = await _repo.Add(item);
            UserDTO user;
            if (traveler != null)
            {
                user = new UserDTO();
                user.UserId = traveler.User.UserId;
                user.Role = traveler.User.Role;
                user.Token = await _tokenGenerate.GenerateToken(user);
                return traveler;
            }

            return null;
        }

        public async Task<ICollection<Traveler>> GetAllTraveler()
        {
            ICollection<Traveler> traveler = await _repo.GetAll();
            if (traveler != null)
            {
                return traveler;
            }
            return null;
        }

        public async Task<Traveler> GetTraveler(IdDTO item)
        {
            Traveler traveler = await _repo.Get(item.id);
            if (traveler != null)
            {
                return traveler;
            }
            return null;
        }
    }
}

using LoginAPI.Models.DTO;

namespace LoginAPI.Interfaces
{
    public interface ITokenGenerate
    {
        public Task<string> GenerateToken(UserDTO user);

    }
}

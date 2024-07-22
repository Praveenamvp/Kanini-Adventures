using LoginAPI.Models.DTO;

namespace LoginAPI.Interfaces
{
    public interface IManageUser
    {
        public Task<UserDTO> LoginUser(UserDTO user);
        public Task<UserDTO> UpdateUserPassword(UserDTO user);
        public Task<UserDTO> AddAdmin(UserDTO user);


    }
}

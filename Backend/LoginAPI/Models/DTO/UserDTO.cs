using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models.DTO
{
    public class UserDTO
    {
        public int UserId { get; set; }
        public string UserEmail { get; set; }
        public string? Password { get; set; }
        public string? Role { get; set; }
        public string? Token { get; set; }
    }
}

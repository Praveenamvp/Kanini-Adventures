using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models
{
    public class User
    {
        [Key]
        public int UserId { get; set; }
        public byte[]? PasswordHash { get; set; }
        public byte[]? PasswordKey { get; set; }
        public string? Role { get; set; }
        [EmailAddress]
        public string? UserEmail { get; set; }



    }
}


using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models.DTO
{
    public class TravelerDTO:Traveler
    {
        [Required(ErrorMessage = "Password string is required")]
        public string? PasswordString { get; set; }
    }
}

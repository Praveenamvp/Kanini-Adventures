using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models
{
    public class Traveler
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }
        public string? UserName { get; set; }
        [Required(ErrorMessage = "User mobile number is required.")]
        [RegularExpression(@"^\+[1-9]\d{1,14}$", ErrorMessage = "User mobile number must be a valid international format.")]
        public string? MobileNumber { get; set; }    


    }
}
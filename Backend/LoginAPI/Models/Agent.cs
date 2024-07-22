using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace LoginAPI.Models
{
    public class Agent
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey("Id")]
        public User? User { get; set; }
        [Required(ErrorMessage = "Agent Manager's name is required.")]
        [MaxLength(100, ErrorMessage = "Agent Manager's name cannot exceed 100 characters.")]
        public string? AgentManagerName { get; set; }

        [Required(ErrorMessage = "Agent mobile number is required.")]
        [RegularExpression(@"^\+[1-9]\d{1,14}$", ErrorMessage = "Agent mobile number must be a valid international format.")]
        public string? AgentMobileNo { get; set; }
        [Required(ErrorMessage = "Agent name is required.")]
        [MaxLength(100, ErrorMessage = "Agent name cannot exceed 100 characters.")]
        public string? AgentName { get; set; }
        [Required(ErrorMessage = "Agent address is required.")]
        [MaxLength(200, ErrorMessage = "Agent address cannot exceed 200 characters.")]
        public string? AgentAddress { get; set; }
        [Required(ErrorMessage = "State is required.")]
        [MaxLength(50, ErrorMessage = "State cannot exceed 50 characters.")]
        public string? State { get; set; }
        [Required(ErrorMessage = "Country is required.")]
        [MaxLength(100, ErrorMessage = "Country cannot exceed 100 characters.")]
        public string? Country { get; set; }
        [MaxLength(50, ErrorMessage = "License number cannot exceed 50 characters.")]

        public string?  LicenseNumber { get; set; }
        public string? Status { get; set; }




    }
}

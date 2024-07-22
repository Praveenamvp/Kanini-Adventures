using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Exclusions
    {
        [Key]
        public int ExclusionId { get; set; }
        [StringLength(200)]

        public string? ExclusionDescription { get; set; }
    }
}

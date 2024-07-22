using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Inclusions
    {
        [Key]
       public int InclusionId { get; set; }
        [StringLength(200)]

        public string? InclusionDescription { get; set; }
    }
}

using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourInclusions
    {
        [Key]
        public int TourInclusionId { get; set; }
        public int TourId { get; set; }
        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }
        public int InclusionId { get; set; }
        [ForeignKey("InclusionId")]
        [JsonIgnore]
        public Inclusions? Inclusions { get; set; }

    }
}

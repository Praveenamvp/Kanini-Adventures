using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
{
    public class TourItinerary
    {
        [Key]
        public int TourDestinationId { get; set; }

        [Required]
        public int TourId { get; set; }

        [ForeignKey("TourId")]
        [JsonIgnore]
        public Tour? Tour { get; set; }

        [Required]
        [Range(1, int.MaxValue, ErrorMessage = "Day number must be at least 1.")]
        public int DayNo { get; set; }

        [Required]
        [StringLength(100)]
        public string? LocationName { get; set; }

        [StringLength(200)]
        public string? LocationDescription { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime ArivalTime { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime DepatureTime { get; set; }

        [Url]
        public string? DestinationImage { get; set; }

        [StringLength(150)]
        public string? DestinationActivity { get; set; }
    }
}

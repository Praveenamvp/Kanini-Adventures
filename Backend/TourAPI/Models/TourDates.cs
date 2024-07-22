
       using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models
    {
        public class TourDates
        {
            [Key]
            public int TourDateId { get; set; }

            [Required]
            public int TourId { get; set; }

            [ForeignKey("TourId")]
            [JsonIgnore]
            public Tour? Tour { get; set; }

            [Required]
            [DataType(DataType.Date)]
            public DateTime StartDate { get; set; }

            [Required]
            [DataType(DataType.Date)]
            public DateTime EndDate { get; set; }

            [Required]
            [Range(1, int.MaxValue, ErrorMessage = "Max capacity must be at least 1.")]
            public int MaxCapacity { get; set; }
        }
    }





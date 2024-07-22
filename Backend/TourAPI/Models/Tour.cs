using System.ComponentModel.DataAnnotations;

namespace TourAPI.Models
{
    public class Tour
    {
        [Key]
            public int TourId { get; set; }
        [Required]
        [StringLength(100)]
        public string TourDescription { get; set; }

        [Required]
        public string TourState { get; set; }

        [Required]
        [Range(0.01, double.MaxValue)]
        public float TourPrice { get; set; }
        [Required]
        [Range(1, int.MaxValue)]
        public int NoOfDays { get; set; }

        [Required]
        [Range(1, int.MaxValue)]
        public int NoOfNights { get; set; }
        public string? TourImage { get; set; }
        public ICollection<TourDates>? TourDates  { get; set; }
        public ICollection<TourInclusions>? TourInclusions { get; set; }

        public ICollection<TourExclusions>? TourExclusions { get; set; }
      public ICollection<TourItinerary>? TourItinerary { get; set; }












    }
}

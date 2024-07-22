namespace TourAPI.Models.NewFolder
{
    public class TourDetailsDTO
    {
        public string? TourName { get; set; }
        public string? TourDescription { get; set; }
        public string? TourState { get; set; }
        public string? TourType { get; set; }
        public float TourPrice { get; set; }
        public int NoOfDays { get; set; }
        public int NoOfNights { get; set; }
        public int MaxCapacity { get; set; }
        public int MinCapacity { get; set; }
        public string? TourImage { get; set; }
        public ICollection<TourDates>? TourDates { get; set; }
        public ICollection<string>? TourInclusions { get; set; }

        public ICollection<string>? TourExclusions { get; set; }
        public ICollection<TourItinerary>? TourItinerary { get; set; }

    }
}

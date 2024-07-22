using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace TourAPI.Models.NewFolder
{
    public class TourExclusionDTO
    {
        public int TourExclusionId { get; set; }
        public int TourId { get; set; }
     
    }
}

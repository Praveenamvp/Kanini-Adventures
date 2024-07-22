using TourAPI.Interfaces;
using TourAPI.Models;
using TourAPI.Models.NewFolder;

namespace TourAPI.Utilities
{
    public class AdapterService:IAdapterDTO
    {
        private readonly IBaseRepo<int, Exclusions> _exclusionsRepo;
        private readonly IBaseRepo<int, Inclusions> _inclusionRepo;

        public AdapterService(IBaseRepo<int, Exclusions> exclusionsRepo, IBaseRepo<int, Inclusions> inclusionsRepo)
        {
            _exclusionsRepo = exclusionsRepo;
            _inclusionRepo = inclusionsRepo;


        }

        public async  Task<ICollection<TourDetailsDTO>> TourIntoTourDTO(ICollection<Tour> tours)
        {
            ICollection<TourDetailsDTO> tourAddedDTO=new List<TourDetailsDTO>();
            TourDetailsDTO tour = new TourDetailsDTO();
            foreach (var item in tours)
            {
                tour = new TourDetailsDTO();
               
                tour.TourDescription = item.TourDescription;
                tour.TourPrice = item.TourPrice;
                tour.NoOfDays = item.NoOfDays;
                tour.NoOfNights = item.NoOfNights;
           
                tour.TourImage = item.TourImage;
                tour.TourItinerary = item.TourItinerary;
                List<string> te = await exclustiondatas(item.TourExclusions);
                List<string> ti = await inclustiondatas(item.TourInclusions);
                tour.TourExclusions = te;
                tour.TourInclusions = ti;
                tourAddedDTO.Add(tour);


            }
            if (tourAddedDTO != null)
            {
                return tourAddedDTO;
            }
            return null;

        }
        public async Task<List<string>> exclustiondatas(ICollection<TourExclusions> tourExclusions)
        {
            List<string> list = new List<string>(); 
            foreach(var data in tourExclusions)
            {
                Exclusions resultData =await _exclusionsRepo.Get(data.ExclusionId);
                list.Add(resultData.ExclusionDescription);
                

            }
            if (list != null)
            {
                return list;

            }

            return null;
        }
        public async Task<List<string>> inclustiondatas(ICollection<TourInclusions> tourInclusions)
        {
            List<string> list = new List<string>();
            foreach (var data in tourInclusions)
            {
                Inclusions resultData = await _inclusionRepo.Get(data.InclusionId);
                list.Add(resultData.InclusionDescription);

            }
            if (list != null)
            {
                return list;

            }

            return null;
        }

        public  async Task<TourDetailsDTO> TourIntoTourDTO(Tour item)
        {
            TourDetailsDTO tour = new TourDetailsDTO();
           

                tour.TourDescription = item.TourDescription;
                tour.TourPrice = item.TourPrice;
                tour.NoOfDays = item.NoOfDays;
                tour.NoOfNights = item.NoOfNights;
           
                tour.TourImage = item.TourImage;
                tour.TourItinerary = item.TourItinerary;
                tour.TourDates= item.TourDates;
                List<string> te = await exclustiondatas(item.TourExclusions);
                List<string> ti = await inclustiondatas(item.TourInclusions);
                tour.TourExclusions = te;
                tour.TourInclusions = ti;


            
            if (tour != null)
            {
                return tour;
            }
            return null;
        }
    }
}

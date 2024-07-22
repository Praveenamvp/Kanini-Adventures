using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using TourAPI.Interfaces;
using TourAPI.Models;
using TourAPI.Models.NewFolder;
using TourAPI.Services;

namespace TourAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [EnableCors("MyCORS")]

    public class TourController : ControllerBase
    {
        private readonly IManageTour _tourService;
        private readonly IAdapterDTO _adapterDTO;
        private readonly IDropDownRepo _dropDownRepo;

        public TourController(IManageTour  tourService,IAdapterDTO adapterDTO, IDropDownRepo dropDownRepo)
        {
            _tourService = tourService;
            _adapterDTO=adapterDTO;
            _dropDownRepo=dropDownRepo;


        }
        [HttpPost("AddTourPackage")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<Tour>> AddTourDetails(Tour tourDetail)
        {
            var tour = await _tourService.AddTourpackage(tourDetail);
            if (tour != null)
            {
                return Created("Tour", tour);
            }
            return BadRequest(new Error(2, "Tour Package Details not added "));


        }
        [HttpPut("UpdateTourPackage")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateTourPackage(Tour tour)
        {
            var tourResult = await _tourService.UpdateTourpackage(tour);
            if (tourResult != null)
            {
                return Accepted("UpdateTour Package Details was Succecssfull");
            }
            return BadRequest(new Error(2, "Cannot UpdateTour Package  "));

        }
        [HttpPut("UpdateMaxCount")]
        [ProducesResponseType(StatusCodes.Status202Accepted)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UpdateMaxCount(TourDTO tour)
        {
            var tourResult = await _tourService.UpdateCount(tour);
            if (tourResult != null)
            {
                return Accepted("Update Max Count was Succecssfull");
            }
            return BadRequest(new Error(2, "Update Max Count was UnSuccecssfull "));

        }
        [HttpGet("GetAllTourPackage")]
        [ProducesResponseType(typeof(ICollection<Tour>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Tour>>> GetAllTourPackage()
        {
            var tourdetails = await _tourService.GetAllTourPackages();
            if (tourdetails != null)
            {
                return Ok(tourdetails);
            }
            return NotFound(new Error(1, "There is notour details currently "));

        }
        [HttpPost("GetTourPackageAsData")]
        [ProducesResponseType(typeof(TourDetailsDTO), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<TourDetailsDTO>> GetTourPackage(IdDTO key)
        {
            var tourdetails = await _tourService.GetTourpackage(key);
            if (tourdetails != null)
            {
                return Ok(tourdetails);
            }
            return NotFound(new Error(1, "There is no tour details currently "));

        }
        [HttpGet("GetAllTourPackageAsDatas")]
        [ProducesResponseType(typeof(ICollection<TourDetailsDTO>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<TourDetailsDTO>>> GetAllTourPackageAsDatas()
        {
            var tourdetails = await _tourService.GetAllTourPackagesData();
            if (tourdetails != null)
            {
                return Ok(tourdetails);
            }
            return NotFound(new Error(1, "There is no tour details currently "));

        }
        [HttpGet("GetAllExclusion")]
        [ProducesResponseType(typeof(ICollection<Exclusions>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Exclusions>>> GetAllExclusion()
        {
            var exclusions = await _dropDownRepo.GetAllExclusions();
            if (exclusions != null)
            {
                return Ok(exclusions);
            }
            return NotFound(new Error(1, "There is no Exclusions details currently "));

        }
        [HttpGet("GetAllInclusion")]
        [ProducesResponseType(typeof(ICollection<Exclusions>), StatusCodes.Status200OK)]

        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public async Task<ActionResult<ICollection<Exclusions>>> GetAllInclusion()
        {
            var inclusions = await _dropDownRepo.GetAllInclusions();
            if (inclusions != null)
            {
                return Ok(inclusions);
            }
            return NotFound(new Error(1, "There is no Inclusions details currently "));

        }
    }
}

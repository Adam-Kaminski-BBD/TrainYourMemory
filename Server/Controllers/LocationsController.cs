using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : Controller
    {
        private readonly LocationsRepository _locationRepository;

        public LocationsController(LocationsRepository locationRepository)
        { 
            _locationRepository = locationRepository;
        }

        [HttpGet]
        public IActionResult GetAllLocations()
        {
            IEnumerable<Location> locations = _locationRepository.getAllLocations();
            return new JsonResult(locations);
        }

        [HttpPost]
        public IActionResult CreateLocation(Location location)
        {
            if (_locationRepository.CreateLocation(location))
            {
                return new JsonResult(location);
            }
            else
            {
                return BadRequest("Location Already Exists");
            }
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : Controller
    {
        [HttpGet]
        public IActionResult GetAllLocations()
        {
            IEnumerable<Location> locations = new List<Location>() { new Location("The Venue", 1), new Location("Scottish Ale House", 2) };
            return new JsonResult(locations);
        }

        [HttpPost]
        public IActionResult CreateLocation(Location location)
        {
            if (location == null || location.Name == null)
            {
                return BadRequest();
            }
            return new JsonResult(location);
        }
    }
}

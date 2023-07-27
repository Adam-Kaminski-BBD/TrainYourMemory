using Microsoft.AspNetCore.Mvc;
using Server.Models.RequestObjects;
using Server.Service;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationsController : Controller
    {
        private readonly LocationsService _locationsService;

        public LocationsController(LocationsService locationsService)
        {
            _locationsService = locationsService;
        }

        [HttpGet]
        public IActionResult GetAllLocations()
        {
            return new JsonResult(_locationsService.GetAllLocations());
        }

        [HttpPost]
        public IActionResult CreateLocation(LocationsRequestObject name)
        {
            return _locationsService.CreateLocation(name) ? new EmptyResult() : BadRequest();
        }
    }
}

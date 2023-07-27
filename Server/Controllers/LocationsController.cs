using Microsoft.AspNetCore.Mvc;
using Server.Auth;
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
        [CustomAuth]
        public IActionResult GetAllLocations()
        {
            return new JsonResult(_locationsService.GetAllLocations());
        }

        [HttpPost]
        [CustomAuth]
        public IActionResult CreateLocation(LocationsRequestObject name)
        {
            return _locationsService.CreateLocation(name) ? new EmptyResult() : BadRequest();
        }
    }
}

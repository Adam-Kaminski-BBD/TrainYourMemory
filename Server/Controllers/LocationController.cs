using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LocationController : Controller
    {
        [HttpGet(Name = "")]
        public User GetLocations()
        {
            return new User(1, "Daniel@gmail.com", "daniel");
        }
    }
}

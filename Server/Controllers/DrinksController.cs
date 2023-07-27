using Microsoft.AspNetCore.Mvc;
using Server.Models.RequestObjects;
using Server.Service;

namespace Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class DrinksController : Controller
    {

        private readonly DrinksService _drinksService;

        public DrinksController(DrinksService drinksService)
        {
            _drinksService = drinksService;
        }

        [HttpGet]
        public IActionResult GetAllDrinks()
        {
            return new JsonResult(_drinksService.GetAllDrinks());
        }

        [HttpPost]
        public IActionResult CreateDrink(DrinksRequestObject drink)
        {
            return _drinksService.CreateDrink(drink) ? new EmptyResult() : BadRequest();
        }
    }
}

using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class DrinksController : Controller
    {
        [HttpGet]
        public IActionResult GetAllDrinks()
        {
            IEnumerable<Drink> drinks = new List<Drink>() { new Drink("Jack", "Whisky", 40.0) };
            return new JsonResult(drinks);
        }

        [HttpPost]
        public IActionResult CreateDrink(Drink drink)
        {
            return new JsonResult(drink);
        }
    }
}

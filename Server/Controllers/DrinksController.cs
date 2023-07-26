using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class DrinksController : Controller
    {

        private readonly DrinksRepository _drinkRepository;

        public DrinksController(DrinksRepository drinksRepository)
        {
            _drinkRepository = drinksRepository;
        }

        [HttpGet]
        public IActionResult GetAllDrinks()
        {
            IEnumerable<Drink> drinks = _drinkRepository.GetAllDrinks();
            return new JsonResult(drinks);
        }

        [HttpPost]
        public IActionResult CreateDrink(Drink drink)
        {
            if (_drinkRepository.CreateDrink(drink))
            {
                return new JsonResult(drink);
            } else
            {
                return BadRequest("Drink Already Exists");
            }
        }
    }
}

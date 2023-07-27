using Microsoft.AspNetCore.Mvc;
using Server.Models.RequestObjects;
using Server.Models;
using Server.Repositories;

namespace Server.Service
{
    public class DrinksService
    {
        private readonly IDrinksRepository _drinkRepository;

        public DrinksService(IDrinksRepository drinksRepository)
        {
            _drinkRepository = drinksRepository;
        }

        [HttpGet]
        public IEnumerable<Drink> GetAllDrinks()
        {
            return _drinkRepository.GetAllDrinks();
        }

        [HttpPost]
        public bool CreateDrink(DrinksRequestObject drink)
        {
            Drink entity = new Drink(drink.Name, drink.Type, drink.AlcoholPercent);
            return _drinkRepository.CreateDrink(entity);
        }
    }
}

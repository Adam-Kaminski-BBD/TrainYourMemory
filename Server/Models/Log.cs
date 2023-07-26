using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("Log")]
    public class Log
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public int LocationId { get; set; }
        public Location Location { get; set; }
        public int DrinkId { get; set; }   
        public Drink Drink { get; set; }

        public Log(int id, DateTime date, int quantity, decimal price, int userId, User user, int locationId, Location location, int drinkId, Drink drink)
        {
            Id = id;
            Date = date;
            Quantity = quantity;
            Price = price;
            UserId = userId;
            User = user;
            LocationId = locationId;
            Location = location;
            DrinkId = drinkId;
            Drink = drink;
        }
        public Log(DateTime date, int quantity, decimal price, int userId, int locationId, int drinkId)
        {
            Id = 0;
            Date = date;
            Quantity = quantity;
            Price = price;
            UserId = userId;
            LocationId = locationId;
            DrinkId = drinkId;
            User = new User();
            Location = new Location();
            Drink = new Drink();
        }
    }
}

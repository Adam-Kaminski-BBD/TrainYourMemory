namespace Server.Models
{
    public class Log
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int Quantity { get; set; }
        public double Cost { get; set; }

        public int UserId { get; set; }
        public User User { get; set; }
        public int LocationId { get; set; }
        public Location Location { get; set; }
        public int DrinkId { get; set; }   
        public Drink Drink { get; set; }

        public Log(int id, DateTime date, int quantity, double cost, int userId, User user, int locationId, Location location, int drinkId, Drink drink)
        {
            Id = id;
            Date = date;
            Quantity = quantity;
            Cost = cost;
            UserId = userId;
            User = user;
            LocationId = locationId;
            Location = location;
            DrinkId = drinkId;
            Drink = drink;
        }
    }
}

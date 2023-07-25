using System.Text.Json.Serialization;

namespace Server.Models
{
    public class LogEntry
    {
        [JsonIgnore]
        public int Id { get; set; }
        public int LocationId { get; set; }
        public int DrinkId { get; set; }
        public int Quantity { get; set; }
        public double Price { get; set; }
        public DateTime Date { get; set; }

        public LogEntry(int id, int locationId, int drinkId, int quantity, double price, DateTime date)
        {
            Id = id;
            LocationId = locationId;
            DrinkId = drinkId;
            Quantity = quantity;
            Price = price;
            Date = date;
        }
    }
}

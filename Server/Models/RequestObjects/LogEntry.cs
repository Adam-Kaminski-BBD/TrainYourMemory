namespace Server.Models.RequestObjects
{
    public class LogEntry
    {
        public int LocationId { get; set; }
        public int DrinkId { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public DateTime Date { get; set; }

        public LogEntry(int locationId, int drinkId, int quantity, decimal price, DateTime date)
        {
            LocationId = locationId;
            DrinkId = drinkId;
            Quantity = quantity;
            Price = price;
            Date = date;
        }
    }
}

namespace Server.Models.DTO
{
    public class LogDto
    {
        public string Drink { get; set; }
        public int Quantity { get; set; }
        public decimal Price { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }

        public LogDto(string drink, int quantity, decimal price, DateTime date, string location)
        {
            Drink = drink;
            Quantity = quantity;
            Price = price;
            Date = date;
            Location = location;
        }
    }
}

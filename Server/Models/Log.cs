namespace Server.Models
{
    public class Log
    {
        public Log(string userName, string locationName, string drinkName, int drinkPercentage, double price, double quantity, DateTime date)
        {
            UserName = userName;
            LocationName = locationName;
            DrinkName = drinkName;
            DrinkPercentage = drinkPercentage;
            Price = price;
            Quantity = quantity;
            Date = date;
        }

        private string UserName { get; set; }
        private string LocationName { get; set; }
        private string DrinkName { get; set; }
        private int DrinkPercentage { get; set; }
        private double Price { get; set; }
        private double Quantity { get; set; }   
        private DateTime Date { get; set; } 

    }
}

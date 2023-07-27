namespace Server.Models
{
    public class TopInformation
    {
        public Drink? Drink { get; set; }
        public Location? Location { get; set; }
        public decimal MoneySpent { get; set; }

        public TopInformation(Drink drink, Location location, decimal moneySpent)
        {
            Drink = drink;
            Location = location;
            MoneySpent = moneySpent;
        }

        public TopInformation() 
        {
            MoneySpent = 0;
        }

        public string ToString()
        {
            return "{" + Drink + "," + Location + "," + MoneySpent + "}";
        }
    }
}
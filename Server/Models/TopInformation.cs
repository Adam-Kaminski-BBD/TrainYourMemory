namespace Server.Models
{
    public class TopInformation
    {
        public string Drink { get; set; }
        public string Location { get; set; }
        public decimal MoneySpent { get; set; }

        public TopInformation(Drink drink, Location location, decimal moneySpent)
        {
            Drink = drink.Name;
            Location = location.Name;
            MoneySpent = moneySpent;
        }

        public TopInformation() 
        {
            Drink = "";
            Location = "";
            MoneySpent = 0;
        }

        public string ToString()
        {
            return "{" + Drink + "," + Location + "," + MoneySpent + "}";
        }
    }
}
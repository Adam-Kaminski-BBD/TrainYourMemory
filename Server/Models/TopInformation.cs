namespace Server.Models
{
    public class TopInformation
    {
        private Drink? Drink { get; set; }
        private Location? Location { get; set; }
        private decimal MoneySpent { get; set; }

        public TopInformation(Drink? drink, Location? location, decimal moneySpent)
        {
            Drink = drink;
            Location = location;
            MoneySpent = moneySpent;
        }

        public TopInformation() 
        {
            MoneySpent = 0;
        }
    }
}
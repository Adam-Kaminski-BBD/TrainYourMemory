namespace Server.Models
{
    public class Log
    {

        public string Location { get; set; }    
        public string Drink { get; set; }   
        public double Cost { get; set; }    
        public int Quantity { get; set; }
        public string Username { get; set; }
        public DateTime Date { get; set; }  

        public Log(string location, string drink, double cost, int quantity, string username, DateTime date)
        {
            Location = location;
            Drink = drink;
            Cost = cost;
            Quantity = quantity;
            Username = username;
            Date = date;
        }
    }
}

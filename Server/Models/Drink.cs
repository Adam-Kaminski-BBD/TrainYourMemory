namespace Server.Models
{
    public class Drink
    {

        public string Name { get; set; }
        public string Type { get; set; }
        public double AlcoholPercetnage { get; set; }

        public Drink (string name, string type, double alcoholPercetnage)
        {
            Name = name;
            Type = type;
            AlcoholPercetnage = alcoholPercetnage;
        }
    }
}

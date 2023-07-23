using System.Text.Json.Serialization;

namespace Server.Models
{
    public class Drink
    {


        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public double AlcoholPercetnage { get; set; }

        public Drink (string name, string type, double alcoholPercetnage, int id)
        {
            Name = name;
            Type = type;
            AlcoholPercetnage = alcoholPercetnage;
            Id = id;
        }
    }
}

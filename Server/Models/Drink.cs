using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models
{

    [Table("Drinks")]
    public class Drink
    {


        [JsonIgnore]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public double AlcoholPercent { get; set; }

        public Drink (string name, string type, double alcoholPercent, int id)
        {
            Name = name;
            Type = type;
            AlcoholPercent = alcoholPercent;
            Id = id;
        }
    }
}

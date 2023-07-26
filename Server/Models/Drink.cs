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
        public decimal AlcoholPercent { get; set; }

        public Drink (string name, string type, decimal alcoholPercent, int id)
        {
            Name = name;
            Type = type;
            AlcoholPercent = alcoholPercent;
            Id = id;
        }

        public Drink ()
        {
            Name = "";
            Type = "";
            AlcoholPercent = 0;
            Id = 0;
        }
    }
}

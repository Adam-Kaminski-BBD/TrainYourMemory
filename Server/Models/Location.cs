using System.Text.Json.Serialization;

namespace Server.Models
{
    public class Location
    {

        public string Name { get; set; }


        [JsonIgnore]
        public int Id { get; set; }
        public Location(string name, int id) 
        { 
            Name = name;
            Id = id;
        }

    }
}

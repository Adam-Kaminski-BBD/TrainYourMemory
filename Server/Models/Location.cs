
using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("Locations")]
    public class Location
    {

        public string Name { get; set; }
        public int Id { get; internal set; }
        public Location(string name, int id) 
        { 
            Name = name;
            Id = id;
        }
        public Location() 
        { 
            Name = "";
            Id = 0;
        }

    }
}

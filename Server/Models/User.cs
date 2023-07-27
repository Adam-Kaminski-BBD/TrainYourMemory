using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Server.Models
{
    [Table("Users")]
    public class User
    {
        public User(string id,string name)
        {
            Id = id;
            Name = name;
        }
        public string Id {  get; set; }
        public string Name { get; set; }

    }
}

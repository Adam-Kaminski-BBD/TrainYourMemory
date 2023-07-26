using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    [Table("Users")]
    public class User
    {

        public User(int id, string email, string name)
        {
            Id = id;
            Email = email;
            Name = name;
        }

        public User(string email, string name)
        {
            Id = 0;
            Email = email;
            Name = name;
        }

        public User()
        {
            Id = 0;
            Email = "";
            Name = "";
        }
        public int Id {  get; set; }
        public string Email { get; set; }
        public string Name { get; set; }

    }
}

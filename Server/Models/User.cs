namespace Server.Models
{
    public class User
    {

        public User(int id, string? email, string? name)
        {
            Id = id;
            Email = email;
            Name = name;
        }

        private int Id {  get; set; }
        private string? Email { get; set; }
        private string? Name { get; set; }

    }
}

namespace Server.Models.RequestObjects
{
    public class UserRequestObject
    {

        public UserRequestObject(string email, string name)
        {
            Email = email;
            Name = name;
        }

        public string Email { get; set; }
        public string Name { get; set; }
    }
}

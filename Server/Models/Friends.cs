namespace Server.Models
{
    public class Friends
    {

        public int Id { get; set; }
        public string UserEmail { get; set; }
        public User User { get; set; }  
        public string FriendEmail { get; set; }
        public User Friend { get; set; }

        public Friends(int id, string userEmail, User user, string friendEmail, User friend)
        {
            Id = id;
            UserEmail = userEmail;
            User = user;
            FriendEmail = friendEmail;
            Friend = friend;
        }

        public Friends(string userEmail, string friendEmail)
        {
            Id = 0;
            UserEmail = userEmail;
            FriendEmail = friendEmail;
            User = new User();
            Friend = new User();
        }
    }
}

using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Friends
    {

        public int Id { get; set; }
        [ForeignKey("user")]
        public string UserEmail { get; set; }
        public User? User { get; set; }

        [ForeignKey("Friend")]
        public string FriendsEmail { get; set; }
        public User? Friend { get; set; }

        public Friends(int id, string userEmail, User user, string friendsEmail, User friend)
        {
            Id = id;
            UserEmail = userEmail;
            User = user;
            FriendsEmail = friendsEmail;
            Friend = friend;
        }

        public Friends(string userEmail, string friendsEmail)
        {
            Id = 0;
            UserEmail = userEmail;
            FriendsEmail = friendsEmail;
        }
    }
}

using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Friends
    {

        public int Id { get; set; }
        public string UserEmail { get; set; }
        public string FriendsEmail { get; set; }
        [ForeignKey("FriendsEmail")]
        public User Friend { get; set; }

        public Friends(int id, string userEmail, string friendsEmail, User friend)
        {
            Id = id;
            UserEmail = userEmail;
            FriendsEmail = friendsEmail;
            Friend = friend;
        }

        public Friends(string userEmail, string friendsEmail)
        {
            Id = 0;
            UserEmail = userEmail;
            FriendsEmail = friendsEmail;
            Friend = new User();
        }
    }
}

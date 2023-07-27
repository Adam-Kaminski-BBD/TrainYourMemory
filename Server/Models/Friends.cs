using System.ComponentModel.DataAnnotations.Schema;

namespace Server.Models
{
    public class Friends
    {

        public int Id { get; set; }
        [ForeignKey("user")]
        public string UserId { get; set; }
        public User? User { get; set; }
        public string FriendId { get; set; }
        public User? Friend { get; set; }

        public Friends(int id, string userId, User user, string friendId, User friend)
        {
            Id = id;
            UserId = userId;
            User = user;
            FriendId = friendId;
            Friend = friend;
        }

        public Friends(string userId, string friendId)
        {
            Id = 0;
            UserId = userId;
            FriendId = friendId;
        }
    }
}

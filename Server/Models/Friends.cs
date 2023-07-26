namespace Server.Models
{
    public class Friends
    {

        public int Id { get; set; }
        public int UserId { get; set; }
        public User? User { get; set; }  
        public int FriendId { get; set; }
        public User? Friend { get; set; }

        public Friends(int id, int userId, User user, int friendId, User friend)
        {
            Id = id;
            UserId = userId;
            User = user;
            FriendId = friendId;
            Friend = friend;
        }

        public Friends(int userId, int friendId)
        {
            UserId = userId;
            FriendId = friendId;
        }
    }
}

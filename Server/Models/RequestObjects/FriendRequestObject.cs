namespace Server.Models.RequestObjects
{
    public class FriendRequestObject
    {
        public string UserId { get; set; }

        public FriendRequestObject(string userId)
        {
            UserId = userId;
        }
    }
}

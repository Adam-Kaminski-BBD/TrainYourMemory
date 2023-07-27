using Server.Models;

namespace Server.Repositories
{
    public interface IRepository
    {
    }

    public interface IUserRepository : IRepository
    {
        public User? GetUserById(string id);
        public bool CreateUser(User user);
    }

    public interface IDrinksRepository: IRepository
    {

        public IEnumerable<Drink> GetAllDrinks();

        public bool CreateDrink(Drink drink);

    }

    public interface ILocationsRepository: IRepository
    {

        public IEnumerable<Location> getAllLocations();

        public bool CreateLocation(Location location);
     
    }

    public interface IFriendRepository: IRepository
    {
        public IEnumerable<Friends> GetFriendsForUser(string id);
        public bool CreateFriend(Friends friend);
       
    }

    public interface ILogRepository: IRepository
    {
        public IEnumerable<Log> GetLogsForUser(string id);
        public bool CreateLog(Log log);
       
    }
}

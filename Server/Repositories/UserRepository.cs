using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext) 
        {
            _dataContext = dataContext;
        }

        public User? GetUserById(string id)
        {
            return _dataContext.Users.Where(user => user.Id == id).FirstOrDefault();
        }

        public bool CreateUser(User user)
        {
            _dataContext.Users.Add(user);
            try
            {
                return _dataContext.SaveChanges() == 1;
            } catch (Exception ex)
            {
                return false;
            }
        }

    }

    public class DrinksRepository: IDrinksRepository
    {
        private readonly DataContext _dataContext;

        public DrinksRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Drink> GetAllDrinks()
        {
            return _dataContext.Drinks;
        }

        public bool CreateDrink(Drink drink)
        {
            _dataContext.Drinks.Add(drink);
            return _dataContext.SaveChanges() == 1;
        }

    }

    public class LocationsRepository: ILocationsRepository
    {
        private readonly DataContext _dataContext;

        public LocationsRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Location> getAllLocations()
        {
            return _dataContext.Locations;
        }
        public bool CreateLocation(Location location)
        {
            _dataContext.Locations.Add(location);
            return _dataContext.SaveChanges() == 1;
        }
    }

    public class FriendRepository: IFriendRepository
    {
        private readonly DataContext _dataContext;

        public FriendRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Friends> GetFriendsForUser(string userId)
        {
            return _dataContext.Friends.Include("Friend").Where(friend => friend.UserId == userId);
        }

        public bool CreateFriend(Friends friend)
        {
            _dataContext.Friends.Add(friend);
            return _dataContext.SaveChanges() == 1;
        }
    }

    public class LogRepository: ILogRepository
    {
        private readonly DataContext _dataContext;

        public LogRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Log> GetLogsForUser(string id)
        {
            return _dataContext.Logs.Include("User").Include("Location").Include("Drink").Where(log => log.UserId == id);
        }

        public bool CreateLog(Log log)
        {
            _dataContext.Logs.Add(log);
            return _dataContext.SaveChanges() == 1;
        }
    }

    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Drink> Drinks { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Friends> Friends { get; set; }
        public DbSet<Log> Logs { get; set; }
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            options.UseSqlServer(Environment.GetEnvironmentVariable("DATABASE"));
        }
    }
}

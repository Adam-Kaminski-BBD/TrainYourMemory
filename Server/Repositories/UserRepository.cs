using Microsoft.EntityFrameworkCore;
using Server.Models;
using System.Reflection.Metadata;

namespace Server.Repositories
{
    public class UserRepository : IUserRepository
    {
        private readonly DataContext _dataContext;

        public UserRepository(DataContext dataContext) 
        {
            _dataContext = dataContext;
        }

        public User? GetUserById(int id)
        {
            return _dataContext.Users.Where(user => user.Id == id).FirstOrDefault();
        }

        public User? GetUserByEmail(string email)
        {
            return _dataContext.Users.Where(user => user.Email == email).FirstOrDefault();
        }

        public bool CreateUser(User user)
        {
            _dataContext.Users.Add(user);
            return _dataContext.SaveChanges() == 1;
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

        public IEnumerable<Friends> GetFriendsForUser(string userEmail)
        {
            return _dataContext.Friends.Where(friend => friend.UserEmail == userEmail);
        }

        public bool CreateFriend(Friends friendOne, Friends friendTwo)
        {
            _dataContext.Friends.Add(friendOne);
            _dataContext.Friends.Add(friendTwo);
            return _dataContext.SaveChanges() == 2;
        }
    }

    public class LogRepository: ILogRepository
    {
        private readonly DataContext _dataContext;

        public LogRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Log> GetLogsForUser(string userEmail)
        {
            return _dataContext.Logs.Include("User").Include("Location").Include("Drink").Where(log => log.UserEmail == userEmail);
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

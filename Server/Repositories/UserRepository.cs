using Microsoft.EntityFrameworkCore;
using Server.Models;

namespace Server.Repositories
{
    public class UserRepository
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

        public bool CreateUser(User user)
        {
            _dataContext.Users.Add(user);
            return _dataContext.SaveChanges() == 1;
        }

    }

    public class DrinksRepository
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

    public class LocationsRepository
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

    public class FriendRepository
    {
        private readonly DataContext _dataContext;

        public FriendRepository(DataContext dataContext)
        {
            _dataContext = dataContext;
        }

        public IEnumerable<Friends> GetFriendsForUser(int userId)
        {
            return _dataContext.Friends.Where(friend => friend.UserId == userId);
        }

        public bool CreateFriend(int userId, int friendId)
        {
            Friends friendOne = new Friends(userId, friendId);
            Friends friendTwo = new Friends(friendId, userId);
            _dataContext.Friends.Add(friendOne);
            _dataContext.Friends.Add(friendTwo);
            return _dataContext.SaveChanges() == 2;
        }
    }

    public class DataContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Drink> Drinks { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Friends> Friends { get; set; }
        protected readonly IConfiguration Configuration;

        public DataContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder options)
        {
            // connect to sql server with connection string from app settings
            options.UseSqlServer(Configuration.GetConnectionString("Database"));
        }
    }
}

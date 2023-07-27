﻿using Server.Models;

namespace Server.Repositories
{
    public interface IRepository
    {
    }

    public interface IUserRepository : IRepository
    {
        public User? GetUserById(int id);
        public User? GetUserByEmail(string email);
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
        public IEnumerable<Friends> GetFriendsForUser(string userEmail);
        public bool CreateFriend(Friends friendOne, Friends friendTwo);
       
    }

    public interface ILogRepository: IRepository
    {
        public IEnumerable<Log> GetLogsForUser(string userEmail);
        public bool CreateLog(Log log);
       
    }
}
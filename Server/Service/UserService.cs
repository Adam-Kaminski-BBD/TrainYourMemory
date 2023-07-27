using Microsoft.IdentityModel.Tokens;
using Server.Models;
using Server.Models.DTO;
using Server.Repositories;

namespace Server.Service
{
    public class UserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IFriendRepository _friendRepository;
        private readonly ILogRepository _logRepository;

        public UserService(IUserRepository userRepository, IFriendRepository friendRepository, ILogRepository logRepository)
        {
            _userRepository = userRepository;
            _friendRepository = friendRepository;
            _logRepository = logRepository;
        }

        public bool CreateUser(User user)
        {
            return _userRepository.CreateUser(user);
        }

        public User? GetUserById(int id)
        {
            return _userRepository.GetUserById(id);
        }

        public User? GetUserByEmail(string email)
        {
            return _userRepository.GetUserByEmail(email);
        }

        public IEnumerable<User> GetUsersFriends(string userEmail)
        {
            return _friendRepository.GetFriendsForUser(userEmail).Select(friend => friend.Friend);
        }

        public bool CreateFriend(string userEmail, string friendEmail)
        {
            Friends friend1 = new Friends(userEmail, friendEmail);
            Friends friend2 = new Friends(friendEmail, userEmail);
            return _friendRepository.CreateFriend(friend1, friend2);
        }

        public IEnumerable<LogDto> GetUserLogs(string userEmail)
        {
            IEnumerable<Log> logs = _logRepository.GetLogsForUser(userEmail);
            return logs.Select(ConvertLogToLogDto);
        }

        public bool CreateLog(string userEmail, LogEntry log) 
        {
            Log entity = new Log(log.Date, log.Quantity, log.Price, userEmail, log.LocationId, log.DrinkId);
            return _logRepository.CreateLog(entity);
        }

        public TopInformation GetTopInformation(string userEmail)
        {
            IEnumerable<Log> userLogs = _logRepository.GetLogsForUser(userEmail);
            if (userLogs.IsNullOrEmpty())
            {
                return new TopInformation();
            }
            return new TopInformation(GetTopDrink(userLogs), GetTopLocation(userLogs), GetMoneySpent(userLogs));
        }

        public Drink? GetTopDrink(IEnumerable<Log> userLogs)
        {
            var lookup = userLogs.Select(log => (log.Drink, log.Quantity)).ToLookup(x => x.Item1);
            return lookup.Select(x => (x.Key, lookup[x.Key].Select(tuple => tuple.Item2).Sum())).OrderByDescending(x => x.Item2).Select(x => x.Key).First();
        }

        public Location? GetTopLocation(IEnumerable<Log> userLogs)
        {
            var lookup = userLogs.Select(log => (log.Location, 1)).ToLookup(x => x.Item1);
            return lookup.Select(x => (x.Key, lookup[x.Key].Select(tuple => tuple.Item2).Sum())).OrderByDescending(x => x.Item2).Select(x => x.Key).First();
        }

        public decimal GetMoneySpent(IEnumerable<Log> userLogs) 
        {
            return userLogs.Select(log => log.Price).DefaultIfEmpty(0).Sum();
        }

        private LogDto ConvertLogToLogDto(Log log)
        {
            return new LogDto(log.Drink.Name, log.Quantity, log.Price, log.Date, log.Location.Name);
        }

    }
}

using Server.Models;
using Server.Models.DTO;
using Server.Models.RequestObjects;
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

        public bool CreateUser(UserRequestObject userRequest)
        {
            User entity = new User(userRequest.Email, userRequest.Name);
            return _userRepository.CreateUser(entity);
        }

        public User? GetUserById(int id)
        {
            return _userRepository.GetUserById(id);
        }

        public User? GetUserByEmail(string email)
        {
            return _userRepository.GetUserByEmail(email);
        }

        public IEnumerable<User> GetUsersFriends(int userId)
        {
            return _friendRepository.GetFriendsForUser(userId).Select(friend => friend.Friend);
        }

        public bool CreateFriend(int userId, int friendId)
        {
            Friends friend1 = new Friends(userId, friendId);
            Friends friend2 = new Friends(friendId, userId);
            return _friendRepository.CreateFriend(friend1, friend2);
        }

        public IEnumerable<LogDto> GetUserLogs(int userId)
        {
            IEnumerable<Log> logs = _logRepository.GetLogsForUser(userId);
            return logs.Select(ConvertLogToLogDto);
        }

        public bool CreateLog(int userId, LogEntry log) 
        {
            Log entity = new Log(log.Date, log.Quantity, log.Price, userId, log.LocationId, log.DrinkId);
            return _logRepository.CreateLog(entity);
        }

        private LogDto ConvertLogToLogDto(Log log)
        {
            return new LogDto(log.Drink.Name, log.Quantity, log.Price, log.Date, log.Location.Name);
        }

    }
}

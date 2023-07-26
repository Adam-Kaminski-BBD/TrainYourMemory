using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Models.DTO;
using Server.Repositories;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {

        private readonly UserRepository _userRepository;
        private readonly FriendRepository _friendRepository;
        private readonly LogRepository _logRepository;

        public UsersController(UserRepository userRepository, FriendRepository friendRepository, LogRepository logRepository)
        {
            _userRepository = userRepository;
            _friendRepository = friendRepository;
            _logRepository = logRepository;
        }

        [HttpGet("{userId}")]
        public IActionResult GetUserById(int userId)
        {
            User? user = _userRepository.GetUserById(userId);
            if (user == null) { return NotFound(); }
            return new JsonResult(user);
        }

        [HttpPost]
        public IActionResult PostUser(User user)
        {
            if (user == null || user.Name == null || user.Email == null)
            {
                return BadRequest("Must supply a name and a valid email address");
            }
            if (_userRepository.CreateUser(user)) 
            { 
                return new JsonResult(user);
            }
            else 
            { 
                return BadRequest("Email Already Exists"); 
            }
        }

        [HttpGet("{userId}/friends")]
        public IEnumerable<User?> GetFriends(int userId)
        {
            return _friendRepository.GetFriendsForUser(userId).Select(friend => friend.Friend).Where(user => user != null);
        }

        [HttpPost("{userId}/friends/{friendId}")]
        public IActionResult PostFriend(int userId, int friendId)
        {
            if (_friendRepository.CreateFriend(userId, friendId))
            {
                return new EmptyResult();
            } else
            {
                return BadRequest();
            }
        }

        [HttpGet("{userId}/logs")]
        public IActionResult GetUserLogs(int userId)
        {
            IEnumerable<Log> logs = _logRepository.GetLogsForUser(userId);
            IEnumerable<LogDto> returnObjects = logs.Select(ConvertLogToLogDto);
            return new JsonResult(returnObjects);
        }

        private LogDto ConvertLogToLogDto(Log log)
        {
            return new LogDto(log.Drink.Name, log.Quantity, log.Price, log.Date, log.Location.Name);
        }

        [HttpPost("{userId}/logs")]
        public IActionResult LogDrinks(int userId, LogEntry log)
        {
            Log entity = new Log(log.Date, log.Quantity, log.Price, userId, log.LocationId, log.DrinkId);
            if (_logRepository.CreateLog(entity))
            {
                return new EmptyResult();
            } else
            {
                return BadRequest();
            }
        }


    }
}

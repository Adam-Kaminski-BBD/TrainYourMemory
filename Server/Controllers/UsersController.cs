using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Repositories;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {

        private readonly UserRepository _userRepository;
        private readonly FriendRepository _friendRepository;

        public UsersController(UserRepository userRepository, FriendRepository friendRepository) 
        {
            _userRepository = userRepository;
            _friendRepository = friendRepository;
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
            return new EmptyResult();
        }

        [HttpPost("{userId}/logs")]
        public IActionResult LogDrinks(int userId, LogEntry log)
        {
            return new EmptyResult();
        }


    }
}

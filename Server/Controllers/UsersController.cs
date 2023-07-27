using Microsoft.AspNetCore.Mvc;
using Server.Models;
using Server.Models.RequestObjects;
using Server.Service;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {

        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        [HttpGet("{email}")]
        public IActionResult GetUserById(string email)
        {
            User? user = _userService.GetUserByEmail(email);
            if (user == null) { return NotFound(); }
            return new JsonResult(user);
        }

        [HttpPost]
        public IActionResult PostUser(UserRequestObject user)
        {
            if (user == null || user.Name == null || user.Email == null)
            {
                return BadRequest("Must supply a name and a valid email address");
            }
            return _userService.CreateUser(user) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{email}/friends")]
        public IEnumerable<User> GetFriends(int userId)
        {
            return _userService.GetUsersFriends(userId);
        }

        [HttpPost("{userId}/friends/{friendId}")]
        public IActionResult PostFriend(int userId, int friendId)
        {
            return _userService.CreateFriend(userId, friendId) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{userId}/logs")]
        public IActionResult GetUserLogs(int userId)
        {
            return new JsonResult(_userService.GetUserLogs(userId));
        }

        [HttpPost("{userId}/logs")]
        public IActionResult LogDrinks(int userId, LogEntry log)
        {
            return _userService.CreateLog(userId, log) ? new EmptyResult() : BadRequest();
        }
    }
}

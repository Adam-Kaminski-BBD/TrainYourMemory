using Microsoft.AspNetCore.Mvc;
using Server.Auth;
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

        [HttpGet("{id}")]
        [CustomAuth]
        public IActionResult GetUserById(string id)
        {
            User? user = _userService.GetUserByEmail(id);
            if (user == null) { return NotFound(); }
            return new JsonResult(user);
        }

        [HttpPost]
        public IActionResult PostUser(User user)
        {
            if (user == null || user.Name == null || user.Id == null)
            {
                return BadRequest("Must supply a name and a valid email address");
            }
            return _userService.CreateUser(user) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{id}/friends")]
        [CustomAuth]
        public IEnumerable<User> GetFriends(string id)
        {
            return _userService.GetUsersFriends(id);
        }

        [HttpPost("{userId}/friends")]
        [CustomAuth]
        public IActionResult PostFriend(string userId, FriendRequestObject friend)
        {
            return _userService.CreateFriend(userId, friend) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{id}/logs")]
        [CustomAuth]
        public IActionResult GetUserLogs(string id)
        {
            return new JsonResult(_userService.GetUserLogs(id));
        }

        [HttpPost("{id}/logs")]
        [CustomAuth]
        public IActionResult LogDrinks(string id, LogEntry log)
        {
            return _userService.CreateLog(id, log) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{id}/logs/top")]
        [CustomAuth]
        public IActionResult GetTopDrink(string id)
        {
            TopInformation information = _userService.GetTopInformation(id);
            return new JsonResult(information);
        }
    }
}

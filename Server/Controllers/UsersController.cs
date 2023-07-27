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

        [HttpGet("{id}")]
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
        public IEnumerable<User> GetFriends(string id)
        {
            return _userService.GetUsersFriends(id);
        }

        [HttpPost("{userId}/friends/{friendId}")]
        public IActionResult PostFriend(string userId, string friendId)
        {
            return _userService.CreateFriend(userId, friendId) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{id}/logs")]
        public IActionResult GetUserLogs(string id)
        {
            return new JsonResult(_userService.GetUserLogs(id));
        }

        [HttpPost("{id}/logs")]
        public IActionResult LogDrinks(string id, LogEntry log)
        {
            return _userService.CreateLog(id, log) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{id}/logs/top")]
        public IActionResult GetTopDrink(string id)
        {
            TopInformation information = _userService.GetTopInformation(id);
            return new JsonResult(information);
        }
    }
}

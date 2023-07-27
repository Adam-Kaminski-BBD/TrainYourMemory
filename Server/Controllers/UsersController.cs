using Microsoft.AspNetCore.Mvc;
using Server.Models;
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
        public IActionResult PostUser(User user)
        {
            if (user == null || user.Name == null || user.Email == null)
            {
                return BadRequest("Must supply a name and a valid email address");
            }
            return _userService.CreateUser(user) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{email}/friends")]
        public IEnumerable<User> GetFriends(string email)
        {
            return _userService.GetUsersFriends(email);
        }

        [HttpPost("{userEmail}/friends/{friendEmail}")]
        public IActionResult PostFriend(string userEmail, string friendEmail)
        {
            return _userService.CreateFriend(userEmail, friendEmail) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{email}/logs")]
        public IActionResult GetUserLogs(string email)
        {
            return new JsonResult(_userService.GetUserLogs(email));
        }

        [HttpPost("{email}/logs")]
        public IActionResult LogDrinks(string email, LogEntry log)
        {
            return _userService.CreateLog(email, log) ? new EmptyResult() : BadRequest();
        }

        [HttpGet("{email}/logs/top")]
        public IActionResult GetTopDrink(string email)
        {
            return new JsonResult(_userService.GetTopInformation(email));
        }
    }
}

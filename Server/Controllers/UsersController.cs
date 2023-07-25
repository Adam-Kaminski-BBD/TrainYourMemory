using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UsersController : Controller
    {
        [HttpGet("{userId}")]
        public IActionResult GetUserById(int userId)
        {
            User User = new User(1, "Daniel@gmail.com", "daniel");
            return new JsonResult(User);
        }

        [HttpPost]
        public IActionResult PostUser(User user)
        {
            if (user == null)
            {
                return BadRequest();
            }
            Console.WriteLine(user.Name);
            Console.WriteLine(user.Email);
            return new JsonResult(user);
        }

        [HttpGet("{userId}/friends")]
        public IActionResult GetFriends(int userId)
        {
            User User = new User(1, "Daniel@gmail.com", "daniel");
            return new JsonResult(new List<User>() { User });
        }

        [HttpPost("{userId}/friends/{friendId}")]
        public IActionResult PostFriend(int userId, int friendId)
        {
            return new EmptyResult();
        }

    }
}

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

        public UsersController(UserRepository userRepository) 
        {
            _userRepository = userRepository;
        }


        [HttpGet("{userId}")]
        public User? GetUserById(int userId)
        {
            return _userRepository.GetUserById(userId);
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
        public IEnumerable<User> GetFriends(int userId)
        {
            User User = new User(1, "Daniel@gmail.com", "daniel");
            return new List<User>() { User };
        }

        [HttpPost("{userId}/friends/{friendId}")]
        public IActionResult PostFriend(int userId, int friendId)
        {
            return new EmptyResult();
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

using Microsoft.AspNetCore.Mvc;
using Server.Models;

namespace Server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : Controller
    {
        [HttpGet(Name = "/{userId}")]
        public User GetUserById(int userId)
        {
            return new User(1, "Daniel@gmail.com", "daniel");
        }

        [HttpGet(Name = "/{userId}/logs")]
        public IEnumerable<Log> GetUserLogsByUserId(int userId)
        {
            return new List<Log>() { new Log("daniel", "the venue", "vodka soda", 40, 100.10, 1.5, new DateTime()) };
        }

        [HttpPost(Name = "/{userId}/logs")]
        public void PostUserLogs(int userId) {

        }
    }
}

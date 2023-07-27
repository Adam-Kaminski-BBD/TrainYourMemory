using Microsoft.AspNetCore.Mvc;
using Server.Auth;
using Server.Models.RequestObjects;
using Server.Service;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class Controller : ControllerBase
{

    [HttpGet]
    public string Test()
    {
        return "root";
    }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Server.Auth
{
    public class CustomAuth : Attribute, IAuthorizationFilter
    {

        public async void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            Console.WriteLine("HERE");
            Microsoft.Extensions.Primitives.StringValues authorizationToken;
            filterContext.HttpContext.Request.Headers.TryGetValue("authorization", out authorizationToken);
            Console.WriteLine(authorizationToken.First());
            try
            {
                var hold = await JwtAuthorization.ValidateToken(authorizationToken.First());
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.ToString());
                filterContext.Result = new UnauthorizedResult();
            }
        }
    }
}

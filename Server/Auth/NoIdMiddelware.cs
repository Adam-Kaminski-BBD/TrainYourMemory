using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

namespace Server.Auth
{
    public class CustomAuth : Attribute, IAuthorizationFilter
    {

        public async void OnAuthorization(AuthorizationFilterContext filterContext)
        {
            Microsoft.Extensions.Primitives.StringValues authorizationToken;
            filterContext.HttpContext.Request.Headers.TryGetValue("authorization", out authorizationToken);
    
            try
            {
                var hold = await JwtAuthorization.ValidateToken(authorizationToken.First());
            }
            catch (Exception ex)
            {
                filterContext.Result = new UnauthorizedResult();
            }
        }
    }
}

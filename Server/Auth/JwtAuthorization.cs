using Google.Apis.Auth;

namespace Server.Auth
{
    public class JwtAuthorization
    {

        public static async Task<bool> ValidateWithUserName(string token, string userId)
        {
            GoogleJsonWebSignature.Payload payload = await ValidateAsync(token);
            return payload.Subject == userId;
        }
        public static async Task<GoogleJsonWebSignature.Payload> ValidateAsync(string token)
        {
            GoogleJsonWebSignature.Payload Sig = await GoogleJsonWebSignature.ValidateAsync(token, null, false);

            return Sig;
        }
        
    }
}

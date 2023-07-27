namespace Server.Models.RequestObjects
{
    public class LocationsRequestObject
    {

        public string Name { get; set; }

        public LocationsRequestObject(string name)
        {
            Name = name;
        }
    }
}

using Server.Models;
using Server.Models.RequestObjects;
using Server.Repositories;

namespace Server.Service
{
    public class LocationsService
    {

        private readonly ILocationsRepository _locationRepository;

        public LocationsService(ILocationsRepository locationRepository)
        {
            _locationRepository = locationRepository;
        }

        public IEnumerable<Location> GetAllLocations()
        {
            return _locationRepository.getAllLocations();
        }

        public bool CreateLocation(LocationsRequestObject locationObject)
        {
            Location location = new Location(locationObject.Name);
            return _locationRepository.CreateLocation(location);
        }

    }
}

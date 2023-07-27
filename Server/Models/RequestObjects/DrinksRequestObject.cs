namespace Server.Models.RequestObjects
{
    public class DrinksRequestObject
    {

        public string Name { get; set; }
        public string Type { get; set; }
        public decimal AlcoholPercent { get; set; }

        public DrinksRequestObject(string name, string type, decimal alcoholPercent, int id)
        {
            Name = name;
            Type = type;
            AlcoholPercent = alcoholPercent;
        }

        public DrinksRequestObject()
        {
            Name = "";
            Type = "";
            AlcoholPercent = 0;
        }
    }
}

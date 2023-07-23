﻿namespace Server.Models
{
    public class User
    {

        public User(int id, string email, string name)
        {
            Id = id;
            Email = email;
            Name = name;
        }

        public int Id {  get; set; }
        public string Email { get; set; }
        public string Name { get; set; }

    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace www.Models
{
    public class ServiceContext
    {
        public class BookContext : DbContext
        {
            public DbSet<Services> Services { get; set; }
            public DbSet<Purchase> Purchases { get; set; }
        }
    }
}
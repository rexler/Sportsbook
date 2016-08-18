using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SportsbookAPI.Models
{
    /* TODO: Migrate classes to separate files. Split out context too */
    public class CouponsContext : DbContext
    {
        public CouponsContext(DbContextOptions<CouponsContext> options) : base(options)
        {}
        public CouponsContext() : base() { }
        public DbSet<Coupon> Coupons { get; set; }
        public DbSet<Event> Events { get; set; }
        public DbSet<Selection> Selections { get; set; }

        public void EnsureSeedData()
        {
            Console.WriteLine("Seeding data...");
            /* TODO: Create test seed data */
            /*
            var coupon = new Coupon
            {
                Title = "Premier League",
                SubTitle = "Outright",
                Events = new List<Event> {
                    new Event { Name = "Arsenal vs Liverpool" },
                    new Event { Name = "Man Utd vs Chelsea" }
                }
            };

            _context.Coupons.Add(coupon);
            _context.SaveChanges();
            */
        }
    }

    public class Coupon
    {
        public int id { get; set; }
        public string Title { get; set; }
        public string SubTitle { get; set; }
        public List<Event> Events { get; set; }
    }

    public class Event
    {
        public int id { get; set; }
        public string Name { get; set; }
        public int CouponId { get; set; }
        public Coupon Coupon { get; set; }
        public List<Selection> Selections { get; set; }
    }

    public class Selection
    {
        public int id { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
        public int EventId { get; set; }
        public Event Event { get; set; }
    }

    
}

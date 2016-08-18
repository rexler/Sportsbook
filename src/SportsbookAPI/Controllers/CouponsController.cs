using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SportsbookAPI.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SportsbookAPI.Controllers
{
    [Route("api/[controller]")]
    public class CouponsController : Controller
    {
        private CouponsContext _context;

        public CouponsController(CouponsContext context)
        {
            _context = context;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            List<Coupon> coupons = _context.Coupons.Include(c => c.Events).ToList();
            foreach (Coupon cp in coupons)
            {
                foreach (Event e in cp.Events)
                {
                    e.Selections = _context.Selections.Where(s => s.EventId == e.id).ToList();
                }
            }
            return new ObjectResult(coupons);
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace SlarkInc.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Age { get; set; }
    }

    public class EmployeeContext:DbContext
    {
        public DbSet<Employee> Emloyee { get; set; }
    }
}
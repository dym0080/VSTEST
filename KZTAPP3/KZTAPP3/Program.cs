using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace KZTAPP3
{
    class Program
    {
        static void Main(string[] args)
        {
            ManagerSalary ms = new ManagerSalary();
            ms.SetSalary(new Employee());
            Console.ReadKey();
        }
    }
    class Employee
    { }
    class Manager:Employee
    { }
    class Salary
    {
        public void SetSalary(Employee e)
        {
            Console.WriteLine("职员被设置了薪水");
            Console.ReadKey();
        }
    }
    class ManagerSalary:Salary
    {
        public void SetSalary(Manager m)
        {
            Console.WriteLine("经理被设置了薪水");
        }
    }
}

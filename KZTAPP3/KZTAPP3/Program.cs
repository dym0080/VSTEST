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
            AA ss = new AA();
            Console.WriteLine( ss.dada());
            Console.ReadKey();
        }
    }

    class AA
    {
        public int dada()
        {
            int i=2;
            try
            {
                return i = 1;
            }
            finally
            {
                i = 2;
                Console.WriteLine("dafaf");
            }
            //return i;
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

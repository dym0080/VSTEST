using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using System.Text;

namespace KZTAPP3
{
    class Program
    {
        static void Main(string[] args)
        {
            ISalary<Programmer> s = new BaseSalaryCounter<Programmer>();
            PrintSalary(s);
            Console.ReadKey();
            
        }
        private static void PrintSalary(ISalary<Programmer> s)
        {
            s.Pay();
        }
    }
    interface ISalary<T>
    {
        void Pay();
    }
    class BaseSalaryCounter<T>:ISalary<T>
    {
        public void Pay()
        {
            Console.WriteLine("Pay base Salary.");
        }
    }
    class Empoyee
    {
        public string Name { get; set; }
    }
    class Programmer:Empoyee
    { }
    class Manager:Empoyee
    { }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KZTAPP3
{
    class Program
    {
        static void Main(string[] args)
        {
            Person luminji = new Person() { FirstName = "Minji", LastName = "lu" };
            BinarySerializer.SerializeToFile(luminji, @"F:\", "person1.txt");
            Person p = BinarySerializer.DeserizlizeFromFile<Person>(@"F:\person1.txt");
            Console.WriteLine(p.FirstName);
            Console.WriteLine(p.LastName);
            Console.WriteLine(p.ChineseName);
            Console.ReadKey();
        }
    }
}

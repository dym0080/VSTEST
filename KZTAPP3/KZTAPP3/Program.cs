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
            Employee mike = new Employee()
            {
                IDCode = "NB123",
                Age = 30,
                Department = new Department() { Name = "Dep1" }
            };
            Employee rose = mike.Clone() as Employee;
            Console.WriteLine(mike.IDCode);
            Console.WriteLine(mike.Age);
            Console.WriteLine(mike.Department);
            Console.WriteLine("开始改变rose值：");
            rose.IDCode = "NB456";
            rose.Age = 60;
            rose.Department.Name = "Dep2";
            Console.WriteLine("mike ：");
            Console.WriteLine(mike.IDCode);
            Console.WriteLine(mike.Age);
            Console.WriteLine(mike.Department);
            Console.WriteLine("rose ：");
            Console.WriteLine(rose.IDCode);
            Console.WriteLine(rose.Age);
            Console.WriteLine(rose.Department);
            Console.ReadKey();


        }
    }

    [Serializable]
    class Employee : ICloneable
    {
        public string IDCode { get; set; }
        public int Age { get; set; }
        public Department Department { get; set; }

        public object Clone()
        {
            using (Stream sr = new MemoryStream())
            {
                IFormatter formatter = new BinaryFormatter();
                formatter.Serialize(sr, this);
                sr.Seek(0, SeekOrigin.Begin);
                return formatter.Deserialize(sr) as Employee;
            }
        }

    }
    [Serializable]
    class Department
    {
        public string Name { get; set; }
        public override string ToString()
        {
            return this.Name;
        }
    }



}

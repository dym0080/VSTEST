using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Collections;
using System.Threading;
using System.Runtime.Serialization.Formatters.Binary;

namespace KZTAPP1
{


    class Program
    {
        static void Main(string[] args)
        {
            Person mike = new Person() { Age = 21, Name = "Mike" };
            mike.NameChanged += new EventHandler(Mike_ddNameChanged);
            SerializeNow(mike);
            DeSerializeNow();
            mike.Name = "Rose";
            Console.WriteLine(mike.Name);
            Console.WriteLine(mike.Age);
            Console.ReadKey();
        }
        static void Mike_ddNameChanged(object sender, EventArgs e)
        {
            Console.WriteLine("Name Changed");
        }
        public static void SerializeNow(Person person)
        {
            FileStream fileStream = new FileStream("E:\\temp11.txt", FileMode.Create);
            BinaryFormatter b = new BinaryFormatter();
            b.Serialize(fileStream, person);
            fileStream.Close();
        }
        public static void DeSerializeNow()
        {
            Person person = new Person();
            FileStream fileStream = new FileStream("E:\\temp11.txt",
            FileMode.Open, FileAccess.Read, FileShare.Read);
            BinaryFormatter b = new BinaryFormatter();
            person = b.Deserialize(fileStream) as Person;
            fileStream.Close();
        }

    }

    [Serializable]
    class Person
    {
        private string name;
        public int Age { get; set; }
        public string Name
        {
            get { return name; }
            set
            {
                if (NameChanged != null)
                {
                    NameChanged(this, null);
                }
                name = value;
            }
        }
        public event EventHandler NameChanged;
    }


}



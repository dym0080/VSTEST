using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Collections;
using System.Threading;

namespace KZTAPP1
{
    class Program
    {
        static void Main(string[] args)
        {

            American american = new American();
            Console.ReadKey();
        }
    }
    class Person
    {
        public Person()
        {
            InitSkin();
        }
        protected virtual void InitSkin()
        {

        }
    }
    class American : Person
    {
        Race race;
        public American()
            : base()
        {
            Race race = new Race() { Name = "White" };
        }
        protected override void InitSkin()
        {
            Console.WriteLine(race.Name);
        }
    }
    class Race
    {
        public string Name { get; set; }
    }
}



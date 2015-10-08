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

            List<string> ss1 = new List<string>() { "111", "222" };

            List<string> ss = new List<string>() { "333", "444" };
            ss.AddRange(ss1);
            foreach (var item in ss)
            {
                Console.WriteLine(item);
            }
            Console.ReadKey();
        }


    }
}




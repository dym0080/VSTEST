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

            new Thread(Go).Start();
            Go();
            Console.ReadKey();

        }

        private static void Go()
        {
            for (int i = 0; i < 5; i++)
            {
                Console.Write("?");
            }
        }
       

    }

}



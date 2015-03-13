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
            TestMethod();
            Console.ReadKey();

        }

        private static int TestMethod()
        {
            int i;
            try
            {
                return i = 1;
            }
            finally
            {
                i = 2;
                Console.WriteLine("222222222222");
            }
            //return i;
        }
    }

}



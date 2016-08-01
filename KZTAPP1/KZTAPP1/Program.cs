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
    public delegate string PrintDelegate();

    public class Program
    {
        public static void Main()
        {
            PrintDelegate del = Func1;

            del += Func2;
            del += Func3;

            //string str = del();
            //Console.WriteLine(str);

            Delegate[] delList = del.GetInvocationList();
            foreach (PrintDelegate item in delList)
            {
                string str = item();
                Console.WriteLine(str);
            }

            Console.ReadLine();
        }

        public static string Func1()
        {
            return "func1 invoke";
        }
        public static string Func2()
        {
            return "func2 invoke";
        }
        public static string Func3()
        {
            return "func3 invoke";
        }
    }

}




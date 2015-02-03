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
            List<Action> lists = new List<Action>();
            for (int i = 0; i < 5; i++)
            {
                Action t=()=>
                    {
                        Console.WriteLine(i.ToString());
                    };
                lists.Add(t);
            }
            foreach (Action t in lists)
            {
                t();
            }

            Console.ReadKey();
        }

    }

}


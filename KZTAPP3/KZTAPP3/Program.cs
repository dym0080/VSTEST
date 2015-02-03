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
            List<Action> lists = new List<Action>();
            TempClass tempClass = new TempClass();
            for (tempClass.i = 0; tempClass.i < 5; tempClass.i++)
            {
                Action t = tempClass.TempFun;
                lists.Add(t);
            }
            foreach (Action t in lists)
            {
                t();
            }

            Console.ReadKey();
            
        }
    }

    class TempClass
    {
        public int i;
        public void TempFun()
        {
            Console.WriteLine(i.ToString());
        }
    }

}

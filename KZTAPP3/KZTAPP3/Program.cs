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
            AA ss = new AA();
            Console.WriteLine( ss.dada());
            Console.ReadKey();
        }
    }

    class AA
    {
        public int dada()
        {
            int i;
            try
            {
                return i = 1;
            }
            finally
            {
                i = 2;
                Console.WriteLine("dafaf");
            }
            //return i;
        }
    }
}

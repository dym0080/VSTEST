using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace KZTAPP3
{
    class Program
    {
        static Week week;
        static void Main(string[] args)
        {
            week = (Week)9;
            Console.Write(week);
            Console.ReadKey();
            
        }
    }

    enum Week
    {
        aa=0,
        a=1,
        b=2,
        c=3,
        d=4,
        e=5,
        f=6,
        g=7
    }


}

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
        public static DateTime t;
        static void Main(string[] args)
        {

            Alpha oAlpha = new Alpha();
            //file://这里创建一个线程，使之执行Alpha类的Beta()方法 
            Thread oThread = new Thread(new ThreadStart(oAlpha.Beta));

            t = System.DateTime.Now;

            oThread.Start();

            Console.WriteLine("Sleep begin ");
            Thread.Sleep(25);
            Console.WriteLine("Sleep time is :" + (System.DateTime.Now - t).TotalMilliseconds);

            oThread.Abort();
            oThread.Join();

            Console.WriteLine();
            Console.WriteLine("Alpha.Beta has finished");
            try
            {
                Console.WriteLine("Try to restart the Alpha.Beta thread");
                oThread.Start();
            }
            catch (ThreadStateException)
            {
                Console.Write("ThreadStateException trying to restart Alpha.Beta. ");
                Console.WriteLine("Expected since aborted threads cannot be restarted.");
                Console.ReadLine();
            }
        }
    }


    public class Alpha
    {
        public void Beta()
        {
            while (true)
            {
                Console.WriteLine("Alpha.Beta runtime" + (System.DateTime.Now - Program.t).TotalMilliseconds);
            }
        }

    }
}



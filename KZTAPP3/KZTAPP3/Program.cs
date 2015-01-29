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
            DynamicSample dynamicSample = new DynamicSample();

            int res = dynamicSample.Add(1, 2);

            Console.WriteLine(res);
            Console.ReadKey();


        }
    }

    public class DynamicSample
    {
        public string Name { get; set; }
        public int Add(int a, int b)
        {
            return a + b;
        }
    }




}

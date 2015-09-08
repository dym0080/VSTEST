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
            IEnumerable<char> query = "How are you, friend.";

            foreach (char vowel in "aeiou")
                query = query.Where(c => c != vowel);

            foreach (char c in query) Console.Write(c); //How are yo, friend.

            Console.ReadKey();
        }


    }
}




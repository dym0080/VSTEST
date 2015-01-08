using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.IO;

namespace KZTAPP1
{
    class Program
    {
        static void Main(string[] args)
        {
            ushort Salary = 65534;
            checked
            {
                Salary = (ushort)(Salary + 1);
                Salary = (ushort)(Salary + 1);
            }
            Console.ReadKey();
        }

        public static string GetFileHash(string filepath)
        {
            using(MD5CryptoServiceProvider md5=new MD5CryptoServiceProvider())
            using(FileStream fs=new FileStream(filepath,FileMode.Open,FileAccess.Read,FileShare.Read))
            {
                return BitConverter.ToString(md5.ComputeHash(fs)).Replace("-", "");
            }
        }
    }
}

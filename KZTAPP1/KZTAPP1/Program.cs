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
            FileUploader f1 = new FileUploader();
            f1.FileUploaded += Progress;
            f1.FileUploaded += AnotherProgess;
            f1.Upload();

            Console.ReadKey();
        }

        static void Progress(object sender,FileUploaderEventArgs e)
        {
            Console.WriteLine(e.FileProgress);
        }
        static void AnotherProgess(object sender,FileUploaderEventArgs e)
        {
            Console.WriteLine("另外一个Progress: "+ e.FileProgress);
        }
    }

    class FileUploader
    {
        //public delegate void FileUploaderHandler(int progress);
        //public event FileUploaderHandler FileUploaded;
        public event EventHandler<FileUploaderEventArgs> FileUploaded;
        public void Upload()
        {
            //int fileProgess = 10;
            FileUploaderEventArgs e = new FileUploaderEventArgs() { FileProgress = 10 };
            while(e.FileProgress>0)
            {
                e.FileProgress--;
                if(FileUploaded!=null)
                {
                    FileUploaded(this,e);
                }
            }
        }
    }
    class FileUploaderEventArgs:EventArgs
    {
        public int FileProgress { get; set; }
    }

}


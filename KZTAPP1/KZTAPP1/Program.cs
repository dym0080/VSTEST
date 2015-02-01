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
        static List<Student> list1 = new List<Student>()
        {
            new Student(){Name="Mike" ,Age=1},
            new Student(){Name="Rose" ,Age=2}
        };
        static void Main(string[] args)
        {
            StudentTeamA teamA2 = new StudentTeamA();
            teamA2.students.Add(new Student() { Name = "Steve", Age = 3 });
            teamA2.students.AddRange(list1);
            Console.WriteLine(teamA2.students.Count);

            StudentTeamA teamA3 = list1;
            Console.WriteLine(teamA3.students.Count);
            Console.ReadKey();
        }
    }
    class Student
    {
        public string Name { get; set; }
        public int Age { get; set; }
    }
    class StudentTeamA
    {
        public List<Student> students { get; private set; }
        public StudentTeamA()
        {
            students = new List<Student>();
        }
        public StudentTeamA(IEnumerable<Student> studentlist)
            : this()
        {
            students.AddRange(studentlist);
        }
    }







}

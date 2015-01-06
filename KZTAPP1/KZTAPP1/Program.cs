using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KZTAPP1
{
    class Program
    {
        static void Main(string[] args)
        {
            Diamod s = new Diamod();
            s.MethodVirtual();
            s.Method();
            Console.ReadKey();
        }
    }
    public class Shape
    {
        public virtual void MethodVirtual()
        {
            Console.WriteLine("base MethodVirtural call");
        }
        public void Method()
        {
            Console.WriteLine("base Method call");
        }
    }
    public class Circle : Shape
    {
        public override void MethodVirtual()
        {
            Console.WriteLine("Circle override MethodVirtual");
        }
    }
    public class Rectangle : Shape
    {

    }
    public class Triangle : Shape
    {
        public new void MethodVirtual()
        {
            Console.WriteLine("Triangle new MethodVirtual");
        }
        public new void Method()
        {
            Console.WriteLine("Triangle new Method");
        }
    }
    public class Diamod : Shape
    {
        public void MethodVirtual()
        {
            Console.WriteLine("Diamod default MethodVirtual");
        }
        public void Method()
        {
            Console.WriteLine("Diamod default Method");
        }
    }
}

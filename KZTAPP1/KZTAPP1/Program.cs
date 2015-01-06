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
            TestShape();
            TestDerive();
            TestDerive2();
            Console.ReadKey();
        }
        private static void TestShape()
        {
            Console.WriteLine("TestShape\tStart");
            List<Shape> shapes = new List<Shape>();
            shapes.Add(new Circle());
            shapes.Add(new Rectangle());
            shapes.Add(new Triangle());
            shapes.Add(new Diamod());
            foreach (Shape s in shapes)
            {
                s.MethodVirtual();
                s.Method();
            }
            Console.WriteLine("TestShape\tEnd");
        }
        private static void TestDerive()
        {
            Console.WriteLine("TestDerive\tStart");
            Circle circle = new Circle();
            Rectangle rectangle = new Rectangle();
            Triangle triangle = new Triangle();
            Diamod diamod = new Diamod();
            circle.MethodVirtual();
            circle.Method();
            rectangle.MethodVirtual();
            rectangle.Method();
            triangle.MethodVirtual();
            triangle.Method();
            diamod.MethodVirtual();
            diamod.Method();
            Console.WriteLine("TestDerive\tEnd");
        }
        private static void TestDerive2()
        {
            Console.WriteLine("TestDerive2\tStart");
            Circle circle = new Circle();
            Rectangle rectangle = new Rectangle();
            Triangle triangle = new Triangle();
            Diamod diamod = new Diamod();
            PrintShape(circle);
            PrintShape(rectangle);
            PrintShape(triangle);
            PrintShape(diamod);
            Console.WriteLine("TestDerive2\tEnd");
        }
        static void PrintShape(Shape shape)
        {
            shape.MethodVirtual();
            shape.Method();
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

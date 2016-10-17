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
using System.Diagnostics;
using System.Net;

namespace KZTAPP1
{

    public class Program
    {
        public static void Main()
        {//Animal的实例
            Animal a = new Animal();
            //Animal的实例，引用派生类Cat对象
            Animal ac = new Cat();
            //Animal的实例，引用派生类Dog对象
            Animal ad = new Dog();
            //Cat的实例
            Cat c = new Cat();
            //Dog的实例
            Dog d = new Dog();
            //重载
            a.Sleep();//Animal Sleep
            a.Sleep(23);//Animal在23点Sleep
            //重写和虚方法
            a.EatFood();//Animal EatFood
            ac.EatFood();//Cat EatFood
            ad.EatFood();//Dog EatFood
            //抽象方法
            a.Live();//Animal重写的Live
            //隐藏方法
            a.Sleep();//Animal Sleep
            ac.Sleep();//Cat Sleep
            c.Sleep();//Cat Sleep
            Console.ReadKey();
        }

        public abstract class Biology
        {
            public abstract void Live();
        }
        public class Animal : Biology
        {
            public override void Live()
            {
                Console.WriteLine("Animal重写的Live");
                //throw new NotImplementedException();
            }
            public void Sleep()
            {
                Console.WriteLine("Animal Sleep");
            }
            public int Sleep(int time)
            {
                Console.WriteLine("Animal在{0}点Sleep", time);
                return time;
            }
            public virtual void EatFood()
            {
                Console.WriteLine("Animal EatFood");
            }
        }
        public class Cat : Animal
        {
            public override void EatFood()
            {
                Console.WriteLine("Cat EatFood");
                //base.EatFood();
            }
            new public void Sleep()
            {
                Console.WriteLine("Cat Sleep");
            }
            //public new void Sleep()
            //{
            //    Console.WriteLine("Cat Sleep");
            //}
        }
        public class Dog : Animal
        {
            public override void EatFood()
            {
                Console.WriteLine("Dog EatFood");
                //base.EatFood();
            }
        }

    }

}




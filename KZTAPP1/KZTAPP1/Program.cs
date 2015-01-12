using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using System.IO;
using System.Collections;

namespace KZTAPP1
{
    class Program
    {
        static void Main(string[] args)
        {

            // 创建商品集合
            IEnumerable<Product> products = new ShoppingCart
            {
                Products = new List<Product> { 
            new Product {Name = "西瓜", Category = "水果", Price = 2.3M}, 
            new Product {Name = "苹果", Category = "水果", Price = 4.9M}, 
            new Product {Name = "ASP.NET MCV 入门", Category = "书籍", Price = 19.5M}, 
            new Product {Name = "ASP.NET MCV 提高", Category = "书籍", Price = 34.9M} 
                }
            };


            //查询分类为“水果”或者单价大于30元的商品
            IEnumerable<Product> filteredProducts = products.Filter(prod =>
                prod.Category == "水果" || prod.Price > 30
            );

            //打印结果
            foreach (Product prod in filteredProducts)
            {
                Console.WriteLine("商品名称: {0}, 单价: {1:c}", prod.Name, prod.Price);
            }
            Console.ReadKey();
        }
    }
    /// <summary>
    /// 购物车类 （实现 IEnumerable<Product> 接口）
    /// </summary>
    public class ShoppingCart : IEnumerable<Product>
    {
        public List<Product> Products { get; set; }
        public IEnumerator<Product> GetEnumerator()
        {
            return Products.GetEnumerator();
        }
        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

    /// <summary>
    /// 定义一个静态类，用于实现扩展方法
    /// </summary>
    public static class MyExtensionMethods
    {
        /// <summary>
        /// 商品查询器
        /// </summary>
        /// <param name="productEnum">扩展类型的实例引用</param>
        /// <param name="selectorParam">一个参数类型为Product，返回值为bool的委托</param>
        /// <returns>查询结果</returns>
        public static IEnumerable<Product> Filter(this IEnumerable<Product> productEnum, Func<Product, bool> selectorParam)
        {
            foreach (Product prod in productEnum)
            {
                if (selectorParam(prod))
                {
                    yield return prod;
                }
            }
        }
    }

    /// <summary>
    /// 商品类
    /// </summary>
    public class Product
    {
        /// <summary>
        /// 商品编号
        /// </summary>
        public int ProductID { get; set; }
        /// <summary>
        /// 商品名称
        /// </summary>
        public string Name { get; set; }
        /// <summary>
        /// 商品描述
        /// </summary>
        public string Description { get; set; }
        /// <summary>
        /// 商品价格
        /// </summary>
        public decimal Price { get; set; }
        /// <summary>
        /// 商品分类
        /// </summary>
        public string Category { set; get; }
    }
}

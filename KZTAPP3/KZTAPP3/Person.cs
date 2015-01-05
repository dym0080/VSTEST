using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.Serialization;
using System.IO;
using System.Runtime.Serialization.Formatters.Binary;

namespace KZTAPP3
{
    [Serializable]
    public class Person:ISerializable
    {
        public string FirstName;
        public string LastName;
        public string ChineseName;

        public Person()
        { }

        protected Person(SerializationInfo info,StreamingContext context)
        {
            FirstName = info.GetString("FirstName");
            LastName = info.GetString("LastName");
            ChineseName = string.Format("{0} {1}", LastName, FirstName);
        }
        void ISerializable.GetObjectData(SerializationInfo info,StreamingContext context)
        {
            info.AddValue("FirstName", FirstName);
            info.AddValue("LastName", LastName);
        }
    }

    //序列化工具类
    public class BinarySerializer
    {
        //将类型序列化为字符串
        public static string Serialize<T>(T t)
        {
            using (MemoryStream stream = new MemoryStream())
            {
                BinaryFormatter bf = new BinaryFormatter();
                bf.Serialize(stream, t);
                return System.Text.Encoding.UTF8.GetString(stream.ToArray());
            }
        }
        //将字符串反序列化为类型
        public static TResult Deserialize<TResult>(string s) where TResult : class
        {
            byte[] bs = System.Text.Encoding.UTF8.GetBytes(s);
            using (MemoryStream stream = new MemoryStream(bs))
            {
                BinaryFormatter bf = new BinaryFormatter();
                return bf.Deserialize(stream) as TResult;
            }
        }
        //将类型序列化为文件
        public static void SerializeToFile<T>(T t, string path, string fullName)
        {
            if (!Directory.Exists(path))
            {
                Directory.CreateDirectory(path);
            }
            string fullPath = string.Format(@"{0}\{1}", path, fullName);
            using (FileStream stream = new FileStream(fullPath, FileMode.OpenOrCreate))
            {
                BinaryFormatter bf = new BinaryFormatter();
                bf.Serialize(stream, t);
                stream.Flush();
            }
        }
        //将文件反序列化为类型
        public static TResult DeserizlizeFromFile<TResult>(string path) where TResult : class
        {
            using (FileStream stream = new FileStream(path, FileMode.Open))
            {
                BinaryFormatter bf = new BinaryFormatter();
                return bf.Deserialize(stream) as TResult;
            }
        }
    }
}

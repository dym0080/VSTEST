using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MyMVCStudyThree.Startup))]
namespace MyMVCStudyThree
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}

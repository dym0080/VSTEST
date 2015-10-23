using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(JsTest.Startup))]
namespace JsTest
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}

using Microsoft.Azure.Functions.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection;
using System;
using libTools.Bindings;
using Microsoft.Azure.WebJobs;
using Microsoft.Extensions.Logging;
using Microsoft.Azure.WebJobs.Host.Config;

[assembly: FunctionsStartup(typeof(SQLFirewallBackend.Startup))]

namespace SQLFirewallBackend
{
    public class Startup : FunctionsStartup
    {
        public override void Configure(IFunctionsHostBuilder builder)
        {
            // IWebJobsBuilders instance
            var wbBuilder = builder.Services.AddWebJobs(x => { return; });

            Models.Authentication.ServerSuffix = ".database.windows.net";

            // And now you can use AddExtension
            wbBuilder.AddExtension<BindingExtensionProvider>();
        }
    }

    public class BindingExtensionProvider : IExtensionConfigProvider
    {
        private readonly ILogger logger;
        public BindingExtensionProvider(ILogger<Startup> logger)
        {
            this.logger = logger;
        }

        public void Initialize(ExtensionConfigContext context)
        {
            // Creates a rule that links the attribute to the binding
            context.AddBindingRule<FromBodyAttribute>().Bind(new FromBodyBindingProvider(this.logger));
        }
    }
}

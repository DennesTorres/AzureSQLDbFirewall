using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.WebJobs;
using Microsoft.Azure.WebJobs.Extensions.Http;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using libTools.Bindings;
using Models;
using Microsoft.Data.SqlClient;
using System.Collections.Generic;

namespace SQLFirewallBackend
{
    public static class SqlDBFirewal
    {
        [FunctionName("ListDbs")]
        public static async Task<IActionResult> Run(
            [HttpTrigger(AuthorizationLevel.Function, "post", Route = null)] HttpRequest req,
            ILogger log, [libTools.Bindings.FromBody] Authentication auth)
        {
            log.LogInformation("C# HTTP trigger function processed a request.");

            string connStr = $"Server=tcp:{auth.ServerName},1433;Database=master;User ID={auth.UserName};Password={auth.Password};Trusted_Connection=False;Encrypt=True;";
            string sqlQuery = "select name from sys.databases";

            List<string> databases = new List<string>();

            SqlConnection connection = new SqlConnection(connStr);
            SqlCommand cmd = new SqlCommand(sqlQuery, connection);            

            connection.OpenAsync().Wait();

            var dr = await cmd.ExecuteReaderAsync();

            while (dr.Read())
                databases.Add(dr["Name"].ToString());

            dr.Close();
            connection.Close();

            return new OkObjectResult(databases);
        }
    }
}

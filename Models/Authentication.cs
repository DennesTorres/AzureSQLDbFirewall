using System;
using System.Text.RegularExpressions;

namespace Models
{

    [Serializable]
    public class Authentication
    {
        private string _serverName;
        public string ServerName {
            get => _serverName;
            set => _serverName=  (value.IndexOf('.')==-1) ? value + ServerSuffix : value;            
        }
        public string UserName {get; set;}
        public string Password {get; set;}

        // should be set to ".database.windows.net" on the application starttup
        public static string ServerSuffix {get; set;}

        public bool isValid => (!String.IsNullOrEmpty(ServerName))&& (!String.IsNullOrEmpty(UserName)) && (!String.IsNullOrEmpty(Password));
    }
}

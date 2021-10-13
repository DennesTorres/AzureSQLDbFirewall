using System;

namespace Models
{
    public class FirewallRule
    {
        public string ruleName {get; set;}
        public string startIp {get; set;}

        public string endIp {get; set;}

        public bool isValid => (!String.IsNullOrEmpty(ruleName))&& (!String.IsNullOrEmpty(startIp)) && (!String.IsNullOrEmpty(endIp));

    }
}


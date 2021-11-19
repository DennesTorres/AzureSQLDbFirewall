using System;
using System.Text.RegularExpressions;

namespace Models
{
    public class FirewallRule
    {
        private const string IpRegEx="((([0-1][0-9]?[0-9]?)|([2][0-5][0-5])|([0-9][0-9]?))\\.){3}(([0-1][0-9]?[0-9]?)|([2][0-5][0-5])|([0-9][0-9]?))";
        private const string ErrorMessage="Invalid Ip Address";
        public string ruleName {get; set;}
        private string _startIp;
        public string startIp {
            get => _startIp;
            set {
                 if (Regex.IsMatch(value,IpRegEx))
                    _startIp=value;
                else
                    throw new ApplicationException(ErrorMessage);
            }   
        }
        private string _endIp;
        public string endIp {
            get => _endIp;
            set {
                 if (Regex.IsMatch(value,IpRegEx))
                    _startIp=value;
                else
                    throw new ApplicationException(ErrorMessage);                
            }
        }

        public bool isValid => (!String.IsNullOrEmpty(ruleName))&& (!String.IsNullOrEmpty(startIp)) && (!String.IsNullOrEmpty(endIp));

    }
}


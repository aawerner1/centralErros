using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace amandaDebocheBE.Models
{
    public class LogInfo
    {
        public int id { get; set; }
        public string description { get; set; }
        public string origin { get; set; }
        public string level { get; set; }
        public string log { get; set; }
        public string environment { get; set; }
        public int frequency { get; set; }
        public string date { get; set; }
        public bool isArquived { get; set; }

    }
}

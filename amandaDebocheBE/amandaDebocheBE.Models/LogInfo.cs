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
        public string origen { get; set; }
        public string level { get; set; }
        public string log { get; set; }
        public int environment { get; set; }
        public string frequency { get; set; }
        public DateTime date { get; set; }
        public Boolean isArquived { get; set; }

    }
}

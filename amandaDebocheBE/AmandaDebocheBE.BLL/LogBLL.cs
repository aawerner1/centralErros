using amandaDeboche.DAL;
using amandaDebocheBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AmandaDebocheBE.BLL
{
    public class LogBLL
    {
        LogDAL logDAL = new LogDAL();
        public LogInfo getLog(int id)
        {
            return logDAL.getLogInfo(id);
        }

        public List<LogInfo> getLogs()
        {
            return logDAL.getLogs();
        }

        public List<LogInfo> getLogs(DebocheFilter filter)
        {
            return logDAL.getLogs(filter); 
        }
    }
}

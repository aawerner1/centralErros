using amandaDebocheBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace amandaDeboche.DAL
{

    // DADOS DO BANCO
    public class LogDAL
    {
        public List<LogInfo> getLogs()
        {
            return new List<LogInfo> { 
                new LogInfo {
                  description = "teste",
                  id = 1,
                  log = "1323"
                },
                new LogInfo {
                  description = "aquele",
                  id = 1,
                  log = "1323"
                },
                new LogInfo {
                  description = "esse",
                  id = 1,
                  log = "1323"
                },
                new LogInfo {
                  description = "outro",
                  id = 1,
                  log = "1323"
                },
                new LogInfo {
                  description = "filtrar",
                  id = 1,
                  log = "1323",
                  isArquived = true
                }
            }; 
        }

        public LogInfo getLogInfo(int id) 
        {
            var logs = getLogs();
            return logs.FirstOrDefault(a => a.id == id);
        }

        public List<LogInfo> getLogs(DebocheFilter filter)
        {
            var logs = getLogs();
            return logs.Where(x => x.isArquived == filter.isArquived).ToList();
        }
    }
}

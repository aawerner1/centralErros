using amandaDebocheBE.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace amandaDeboche.DAL
{
    public class LogDAL
    {
        public static List<LogInfo> _listLogs = new List<LogInfo> { 
                new LogInfo {
                   id = 1,
		           description= "Failed to load resource",
		           origin = "172.16.2.88",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "produção",
		           frequency = 1000,
		           date = "28/11/2015 as 10:11",
		           isArquived = true
                },
                new LogInfo {
                  id = 2,
		           description= "Deu erro porque fiz errado",
		           origin = "172.16.1.208",
		           level = "warning",
		           log = "Bug na central de erro",
		           environment = "desenvolvimento",
		           frequency = 1000,
		           date = "23/07/2019 as 16:45",
		           isArquived = true
                },
                new LogInfo {
                   id = 3,
		           description= "Failed to load resource",
		           origin = "172.16.2.39",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "produção",
		           frequency = 1000,
		           date = "02/01/2015 as 14:30",
		           isArquived = true
                },
                new LogInfo {
                  id = 4,
		           description= "Deu erro porque fiz errado",
		           origin = "172.16.2.300",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "desenvolvimento",
		           frequency = 1000,
		           date = "25/10/2019 as 12:12",
		           isArquived = true
                },
                new LogInfo {
                   id = 5,
		           description= "Deu erro porque fiz errado",
		           origin = "172.16.1.46",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "produção",
		           frequency = 1000,
		           date = "01/01/2019 as 23:15",
		           isArquived = true
                },
                 new LogInfo {
                  id = 6,
		           description= "Deu erro porque fiz errado",
		           origin = "172.16.2.300",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "desenvolvimento",
		           frequency = 1000,
		           date = "25/10/2019 as 12:12",
		           isArquived = true
                },
                new LogInfo {
                   id = 7,
		           description= "Deu erro porque fiz errado",
		           origin = "172.16.1.46",
		           level = "error",
		           log = "Bug na central de erro",
		           environment = "produção",
		           frequency = 1000,
		           date = "01/01/2019 as 23:15",
		           isArquived = true
                }
            }; 

        // DAL é Data Access Layer (Camada de acesso a dados)


        public List<LogInfo> getLogs()
        {
            return _listLogs;
        }
        public LogInfo getLogInfo(int id) 
        {
            var logs = getLogs();
            return logs.FirstOrDefault(a => a.id == id);
        }

        public List<LogInfo> getLogsArquived(DebocheFilter filter)
        {
            var logs = getLogs();
            return logs.Where(x => x.isArquived == filter.isArquived).ToList();
        }

        public void deleteLog(int id)
        {
            _listLogs.RemoveAll(x => x.id == id);
        }
    }
}

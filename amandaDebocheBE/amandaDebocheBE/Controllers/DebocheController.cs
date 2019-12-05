using amandaDebocheBE.Models;
using AmandaDebocheBE.BLL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace amandaDebocheBE.Controllers
{
    public class DebocheController : ApiController
    

        {
        LogBLL logBll = new LogBLL();
        // GET api/<controller>
        public IEnumerable<LogInfo> Get()
        {
            return logBll.getLogs();
        }

        // GET api/<controller>/5
        public LogInfo Get(int id)
        {
            return logBll.getLog(id);
        }

        // POST api/<controller>
        public List<LogInfo> Post([FromBody]DebocheFilter filter)
        {
            return logBll.getLogs(filter);
        }

        // PUT api/<controller>/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
            logBll.deleteLog(id);
        }
    }
}
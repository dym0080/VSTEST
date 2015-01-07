using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using System.Data.Entity;
using System.Data.Entity.SqlServer;
using System.Data.Entity.Infrastructure.Interception;
using System.Data.SqlClient;
using System.Data.Common;
using System.Diagnostics;
using System.Reflection;
using ContosoUniversity.Logging;

namespace ContosoUniversity.DAL
{
    public class SchoolInterceptorLogging :DbCommandInterceptor
    {
        private ILogger _logger = new Logger();
        private readonly Stopwatch _stopwatch = new Stopwatch();
        public override void NonQueryExecuting(DbCommand command, DbCommandInterceptionContext<int> interceptionContext)
        {
            base.NonQueryExecuting(command, interceptionContext);
            _stopwatch.Restart();
        }
        public override void NonQueryExecuted(DbCommand command, DbCommandInterceptionContext<int> interceptionContext)
        {
            _stopwatch.Stop();
            if(interceptionContext!=null)
            {
                _logger.Error(interceptionContext.Exception, "Error executing command:{0}", command.CommandText);
            }
            else
            {
                _logger.TraceApi("SQL Database", "SchoolInterceptorLogging NonQueryExecuted", _stopwatch.Elapsed, "Command:{0}", command.CommandText);
            }
            base.NonQueryExecuted(command, interceptionContext);
        }
        public override void ReaderExecuting(DbCommand command, DbCommandInterceptionContext<DbDataReader> interceptionContext)
        {
            _stopwatch.Restart();
            base.ReaderExecuting(command, interceptionContext);
        }
        public override void ReaderExecuted(DbCommand command, DbCommandInterceptionContext<DbDataReader> interceptionContext)
        {
            _stopwatch.Stop();
            if (interceptionContext != null)
            {
                _logger.Error(interceptionContext.Exception, "Error executing command:{0}", command.CommandText);
            }
            else
            {
                _logger.TraceApi("SQL Database", "SchoolInterceptorLogging ReaderExecuted", _stopwatch.Elapsed, "Command:{0}", command.CommandText);
            }
            base.ReaderExecuted(command, interceptionContext);
        }
        public override void ScalarExecuting(DbCommand command, DbCommandInterceptionContext<object> interceptionContext)
        {
            _stopwatch.Restart();
            base.ScalarExecuting(command, interceptionContext);
        }
        public override void ScalarExecuted(DbCommand command, DbCommandInterceptionContext<object> interceptionContext)
        {
            _stopwatch.Stop();
            if (interceptionContext != null)
            {
                _logger.Error(interceptionContext.Exception, "Error executing command:{0}", command.CommandText);
            }
            else
            {
                _logger.TraceApi("SQL Database", "SchoolInterceptorLogging ScalarExecuted", _stopwatch.Elapsed, "Command:{0}", command.CommandText);
            }
            base.ScalarExecuted(command, interceptionContext);
        }
        
    }
}
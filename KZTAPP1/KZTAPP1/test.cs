using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace KZTAPP1
{
    public class test
    {
        public static int BatchInert(string connectionString, string desTable, DataTable dt, int batchSize = 500)
        {
            using (var sbc = new SqlBulkCopy(connectionString, SqlBulkCopyOptions.UseInternalTransaction)
            {
                BulkCopyTimeout = 300,
                NotifyAfter = dt.Rows.Count,
                BatchSize = batchSize,
                DestinationTableName = desTable
            })
            {
                foreach (DataColumn column in dt.Columns)
                    sbc.ColumnMappings.Add(column.ColumnName, column.ColumnName);
                sbc.WriteToServer(dt);
            }

            return dt.Rows.Count;
        }
    }
}

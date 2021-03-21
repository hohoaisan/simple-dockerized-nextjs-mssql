# Wait for SQL Server staring up
sleep 20s
attempt=1
rate=10
while [ $attempt -le $rate ]
do
  # Attempt to initialize first database
  /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -Q "CREATE DATABASE ${DATABASE_NAME}"
  FILE=./database.sql
  if test -f "$FILE"; then
    /opt/mssql-tools/bin/sqlcmd -S localhost -U SA -P "${SA_PASSWORD}" -d "${DATABASE_NAME}" -i database.sql
  fi
  if [ $? -eq 0 ]
    then
    echo "DATABASE INITIALIZED"
    break
    else
    echo "DATABASE INITIALIZING FAILED, ATTEMPT $attempt OF $rate"
  attempt=$(( $attempt + 1 ))
  sleep 5s
fi
done
<?php
    $serverName = "visiondatabaseserver.database.windows.net"; // update me
    $connectionOptions = array(
        "Database" => "visiondatabase", // update me
        "Uid" => "visiondatabase", // update me
        "PWD" => "QWE666qwe!" // update me
    );
    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    $tsql= "SELECT TOP (1000) [IncidentType]
    ,[Date]
    ,[Time]
    ,[Evidence]
    ,[Location]
FROM [dbo].[VisionTable]";
    $getResults= sqlsrv_query($conn, $tsql);
    
    if ($getResults == FALSE)
        echo (sqlsrv_errors());
    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
     header("Content-type: image/jpeg");
     echo ($row['Evidence']);
    }
    sqlsrv_free_stmt($getResults);
?>

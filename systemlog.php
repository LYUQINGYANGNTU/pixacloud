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
FROM [dbo].[VisionTable]";?>

<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
        body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        }

        .topnav {
        overflow: hidden;
        background-color: #333;
        }

        .topnav a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
        }

        .dropdown {
        float: right;
        overflow: hidden;
        }

        .dropdown .dropbtn {
        font-size: 16px;  
        border: none;
        outline: none;
        color: white;
        padding: 14px 16px;
        background-color: inherit;
        font-family: inherit;
        margin: 0;
        }

        .topnav a:hover, .dropdown:hover .dropbtn{
        background-color: #ddd;
        color: black;
        }

        .topnav a.active {
        background-color: #afb8ba;
        color: white;
        }

        .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        }

        .dropdown-content a {
        float: none;
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: left;
        }

      .dropdown-content a:hover {
      background-color: #ddd;
      }

      .dropdown:hover .dropdown-content {
      display: block;
      }
        </style>
        </head>
        <body>

        <div class="topnav">
        <a href="../index.html">Telepresence</a>
        <a class="active" href="./php/systemlog.php">System Log</a>
        <a href="../Robotmanagement.html">Robot Management</a>
        <div class="dropdown">
          <button class="dropbtn">Active Robot: Julee 
            <i class="fa fa-caret-down"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Julee</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div> 
        </div>
        <link rel="stylesheet" type="text/css" href="logstyles.css"/>
    </head>
    <body>
        <div style="position:relative; top:50px; left:25px">
        <table id="customers">
            <tr>
              <th>Incident Type</th>
              <th>Date</th>
              <th>Time Stamp</th>
              <th>Evidence</th>
              <th>Location</th>
            </tr>
            <?php 
    $getResults= sqlsrv_query($conn, $tsql);
    if ($getResults == FALSE)
        echo (sqlsrv_errors());
    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
      echo "<tr>\n";
      echo "<td>" . $row['IncidentType'] . "</td>";
      echo "<td>" . $row['Date'] ."</td>";
      echo "<td>" . $row['Time'] ."</td>";    
      echo "<td>" . '<img src="data:image/jpg;base64,'.base64_encode($row['Evidence']).'" style="width:600px;height:400px;">' ."</td>";
      echo "<td>" . $row['Location'] ."</td>";
      echo "</tr>";
    }
    sqlsrv_free_stmt($getResults);?>
          </table>
        </div>
        
        
    </body>
</html>

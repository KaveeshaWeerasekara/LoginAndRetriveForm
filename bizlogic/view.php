<?php
$servername = "localhost:3307";
$username = "root";
$password = "";
$database= "reactjsusers";
 
// Create connection
$db = mysqli_connect($servername, $username, $password, $database);

if($db->connect_error){
die("connection failed:".$db->connect_error);
}

$trp=mysqli_query($db,"SELECT * from users");
$rows=array();
while($r=mysqli_fetch_assoc($trp){
	$rows[]=$r;
}
print json_encode($rows);





?>
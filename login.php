<?php
$conn = mysqli_connect ("localhost", "root", "", "itpc2");

if (!$conn){
    die("wala connect");
}

$mobile =$_POST['mobile'];
$pass  =$_POST['password'];

$sql = "Select * from login Where mobile = '$mobile' 
and password = '$pass'";

$result=mysqli_query($conn, $sql);

if(mysqli_num_rows($result) >0){
    echo("SUCCESS");
    exit();
    }

    else{
    echo("error");    
}
mysqli_close($conn);


?>
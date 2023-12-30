<?php
$n=$_POST['name'];
$e=$_POST['email'];
$c=$_POST['commend']
$con=mysqli_connect("localhost","root","","lokesh");
$sql="INSERT INTO userdetails(username,userphone,usercommend) values('$n','$e','$c')";
$r=mysqli_query($con,$sql);
if($r)
{
    echo "students details added successfully";
}
else
{
    echo "Its is not added";
}
?>
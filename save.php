<?php
$dbhost = 'sql303.infinityfree.com';
$dbuser = 'if0_37178733';
$dbpass = 'XTrH8cWiTwb';
$database = 'if0_37178733_contact_form';

// $servername = "localhost";
// $username = "if0_37178733";  // Your database username
// $password = "XTrH8cWiTwb";      // Your database password
// $dbname = "if0_37178733_contact_formt";

$conn = mysqli_connect($dbhost,$dbuser,$dbpass,$database);
if(!$conn){
    echo 'You are not connected';
}

$name = $_GET['name'];
$email = $_GET['email'];
$subject = $_GET['subject'];
$message = $_GET['message'];

$sql = "INSERT INTO `cont_info`(`v_name`, `v_email`, `v_subject`, `message`) VALUES ('$name','$email','$subject','$message')";

$result = mysqli_query($conn,$sql);
if($result){
    echo "<script>alert('Thanks for getting in Touch!')</script>";
    header("Refresh:0; url=index.html"); // You can set a custom delay if needed
exit;

}
else{
    echo 'Form not submitted';
}

?>

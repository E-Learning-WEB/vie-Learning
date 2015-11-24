<?php
include('..con_koneksi.php');
$id = $_GET['id'];

$sql = "SELECT * FROM tbmateri WHERE id=$id";

$data = mysql_query($sql);
$row = mysql_fetch_assoc ($data);

if(isset($row['materi']))
{
	$lokasi =['materi'];
}
?>

<object data="../<?php echo $lokasi?>" width="100%" height="380px">
</object>
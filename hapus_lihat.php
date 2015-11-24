<?php
	mysql_connect("localhost","root","");
	mysql_select_db("nama");
	$id = $_GET['id'];
	$sql ="DELETE FROM tbpengguna WHERE id = '$id'";
	mysql_query($sql);
	header('location:anggota.php');
	?>
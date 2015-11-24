<?php
	mysql_connect("localhost","root","");
	mysql_select_db("test");
	$Id = $_GET['id'];
	$sql ="delete from tbpengguna where id = '$id'";
	mysql_query($sql);
	header('location:anggota.php');
	?>
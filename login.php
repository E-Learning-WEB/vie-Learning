<?php

if (isset($_POST['login']))
{
	include('koneksi.php');
	$sql="select * From tbpengguna where username='$_POST[username]' and password = '$_POST[password]'";
	$data = mysql_query($sql);
	if (mysql_num_rows(mysql_query($sql))>0)
	{
		$row = mysql_fetch_assoc($data);
		$_SESSION['login']=true;
		$_SESSION['id_anggota']= $row['id'];
		$_SESSION['username']= $row['username'];
		$_SESSION['status']= $row['status'];
		header('location:index.php');
	}
}
	if (isset($_SESSION['login']))
	{
		echo "selamat datang :".$_SESSION['username'];
		echo "<a href='logout.php'>logout</a>";
	}
	else
	{?>
<br />

		<form action="login2.php" method="post">
		<table width="40%">
			<tr>
				<td> User Name</td>
				<td>:</td>
				<td><Input name="username" type="text" size="20" maxlength="20" /> </td>
			</tr>
			<tr>
				<td> Password</td>
				<td>:</td>
				<td><Input name="password" type="password" size="20" maxlength="20" /> </td>
			</tr>
			<tr>
				<td colspan="3"> <center>
				<input name="login" type="submit" value=" login " />
				</center></td>
			</tr>
			<tr>
				<td colspan="4">  <center>
				<a href="registrasi.php">Registrasi</a> <a href="Lupa_pass.php">Lupa Password</a>
				</center></td>
			</tr>		
		</table>
<?php
	}?>
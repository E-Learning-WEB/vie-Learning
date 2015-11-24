<?php
	if (isset($_POST['submit']))
	{
	$username = $_POST['username'];
	$nama_lengkap = $_POST['nama_lengkap'];
	$e_mail = $_POST['e_mail'];
	$password = $_POST['password'];
	$alamat = $_POST['alamat'];
	include('koneksi.php');
	//cek apakah username kosong
		if (trim($username)=='' OR trim($password)=='')
		{
			echo "User name atau password belum berisi data, registrasi gagal...";
		}
		else
		{
			//cek apakah kata kunci sudah ada di database
			$sql = "select * from tbpengguna where username = '$username'";
			$data = mysql_query($sql);
			if (mysql_num_rows($data)>0)
			{ 
				echo "Username ini sudah dipakai oleh orang lain. coba ulangi dengan username lain";
			}
			else
			{
					$sql = "insert into tbpengguna set username = '$username',
														nama_lengkap ='$nama_lengkap',
														e_mail = '$e_mail',
														password = '$password',
														alamat = '$alamat'";
				mysql_query($sql);
				echo "Data pengguna baru sudah di simpan";
			}
		}
	}
else
{
?>
<form action="registrasi.php" method="post">
	<table>
		<tr>
			<td>User Name</td>
			<td>:</td>
			<td><input type="text" maxlength="30" size="30" name="username"/></td>
		</tr>
		<tr>
			<td>Nama Lengkap</td>
			<td>:</td>
			<td><input type="text" maxlength="30" size="30" name="nama_lengkap"/></td>
		</tr>
		<tr>
			<td>E-Mail</td>
			<td>:</td>
			<td><input type="text" maxlength="30" size="30" name="e_mail"/></td>
		</tr>
		<tr>
			<td>Password</td>
			<td>:</td>
			<td><input type="password" maxlength="30" size="30" name="password"/></td>
		</tr>
		<tr>
			<td>Alamat</td>
			<td>:</td>
			<td><input type="text" maxlength="30" size="30" name="alamat"/></td>
		</tr>
		<tr>
			<td></td>
			<td></td>
			<td><input type="submit" maxlength="20" size="20" name="submit"/></td>
		</tr>
	</table>
	</form>	 
	<?php
	}
	?>

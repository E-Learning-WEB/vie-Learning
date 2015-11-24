<?php
	if (isset($_POST['submit']))
	{
		$username   = $_POST['username'];
		$password   = $_POST['password'];
		$nama_lengkap = $_POST['nama'];
		$alamat 	= $_POST['alamat'];
		$e_mail 	= $_POST['email'];
		include('koneksi.php');		
		$sql = "update tbpengguna set 	password = '$password',
										nama_lengkap 	= '$nama_lengkap',
										alamat 	= '$alamat',
										e_mail = '$e_mail'
				where username = '$username'";
		echo $sql;		
		mysql_query($sql);
		header('location:anggota.php');	
		
	}
	if (isset($_GET['id']))
	{
		mysql_connect("localhost","root","");
		mysql_select_db("nama");
		$id = $_GET['id'];
		$sql = "select * from tbpengguna where id='$id'";
		$data = mysql_query($sql);
		if (mysql_num_rows($data)>0) 
		{
			$row = mysql_fetch_assoc($data);
			?>
<h2>Form Registrasi</h2>
<form action="edit.php" method="post">
    <table>
        <tr>
            <td>User Name </td>
            <td>:</td>
            <td><input type="text" maxlength="20" size="20" readonly="readonly" name="username" 
            value="<?php echo $row['username']; ?>" /></td>
        </tr>        
        <tr>
            <td>Password</td>
            <td>:</td>
            <td><input type="password" maxlength="20" size="20" name="password" 
            value="<?php echo $row['password']; ?>"/></td>
        </tr>        
        <tr>
            <td>Nama Pengguna</td>
            <td>:</td>
            <td><input type="text" maxlength="50" size="50" name="nama" 
            value="<?php echo $row['nama_lengkap']; ?>"/></td>
        </tr>        
        <tr>
            <td>Alamat</td>
            <td>:</td>
            <td><input type="text" maxlength="100" size="50" name="alamat" 
            value="<?php echo $row['alamat']; ?>"/></td>
        </tr>       
	    <tr>
            <td>E-Mail</td>
            <td>:</td>
            <td><input type="email" name="email" 
            value="<?php echo $row['e_mail']; ?>"/></td>
        </tr>      
        <tr>
            <td colspan="3"><input type="submit" name="submit" value="Save">
            </td>
        </tr>
    </table>	
</form>
<?php
		}
	}

	?>
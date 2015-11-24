<form action="anggota.php" method="post">
	Kriteria : <select name="kriteria">
					<option value="id"> Id </option>
    				<option value="username">User name</option>
    				<option value="nama">Nama Lengkap</option>
    				<option value="alamat">Alamat Rumah</option>
    				<option value="e_mail">email</option>
    			</select>
    Kondisi <input type="text" name="cari" size="20" maxlength="50">
    <input type="submit" name="filter" value=" FILTER " title="Cari Data">
</form>
<?php
	mysql_connect("localhost","root","");
	mysql_select_db("nama");
	if (isset($_POST['filter']))
	{
		$kriteria = $_POST['kriteria'];
		$cari = $_POST['cari'];
		$sql = "Select * from tbpengguna where $kriteria like '%$cari%'";
		$data = mysql_query($sql) or die("$sql");
	}
	else
	{	
		$sql = "Select * from tbpengguna";
		$data = mysql_query($sql) or die("$sql");
	}
?>
	<table width="100%" border="1">
    	<tr>
			<th>Id</th>
        	<th>Username</th>
        	<th>Nama</th>
        	<th>Alamat</th>
        	<th>Email</th>
        	<th>Status</th>
        	<th>Proses</th>
		</tr>
<?php
	while ($row = mysql_fetch_assoc($data))
	{?>
    	<tr>
			<td><?php echo $row['id'];?></td>
        	<td><?php echo $row['username'];?></td>
        	<td><?php echo $row['nama_lengkap'];?></td>
        	<td><?php echo $row['alamat'];?></td>
        	<td><?php echo $row['e_mail'];?></td>
        	<td><?php echo $row['status'];?></td>
        	<td><a href="hapus_lihat.php?id=<?php echo $row['id'];?>" title="Hapus Data">Hapus</a>
            <a href="edit2.php?id=<?php echo $row['id'];?>" title="Edit Data">Edit</a>
            </td>
		</tr>
<?php		
	}?>
	</table>
	
<?php
		include('koneksi.php');
	if (isset($_POST['upload']))
	{
		$waktu = time();
		
		$file =$_FILES['file'];
		$nama =$_FILES;
		$fileextensi = substr($file['name'],strpos($file['name'],'.')+1) ;
		
		$judul = $_POST['judul'];
		
		if($fileextensi == 'doc' OR $fileextensi == 'docx' OR $fileextensi == 'pdf')
		{
		move_uploaded_file($file['tmp_name'],"materi/$file[name]") or die ('gagal');
			$konten = 'materi = "'.$file['name'].'"';
		}
		else
		{
		move_uploaded_file($file['tmp_name'],"video/$file[name]") or die ('gagal');
			$konten = 'video ="'. $file['name']. '"';		
		}
		
		$sql="Insert into tbmateri set judul = '$judul',
										waktu = '$waktu',
									$konten";
									
		mysql_query($sql);
}?>

<form action="upload.php" method="post" enctype="multipart/form-data">
	Judul : <input type="text" name="judul" />
	Nama File : <input type="file" name="file" />
	<input type="submit" value="upload" name="upload" />
</form>

<table width="100% " border="1">
  <tr>
    <td>Judul</td>
    <td>Waktu</td>
    <td>Materi</td>
    <td>Video</td>
  </tr>
  <?php
  	$sql = 'SELECT * FROM tbmateri';
	$data = mysql_query($sql);
	while ($row = mysql_fetch_assoc($data))
	{
  ?>
  <tr>
    <td><a href="tampil2.php?id=<?php echo $row['id']?>">
	<?php echo $row['judul']?>
	</a></td>
    <td><?php echo date('d-F-Y H:i:s A', $row['waktu'])?></td>
    <td><?php echo $row['materi']?></td>
    <td><?php echo $row['video']?></td>
  </tr>
<?Php
}
?>
</table>

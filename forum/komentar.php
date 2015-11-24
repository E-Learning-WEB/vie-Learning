<?php
session_start();
include 'function.php';

//fungsi untuk memperindah tulisan
include 'plugin/Parsedown.php';
$Parsedown = new Parsedown();

$id_anggota = $_SESSION['id_anggota'];
echo $_SESSION['id_anggota'];
if (isset($_POST['kirimkomentar']))
{
	include 'koneksi.php';
	$id_materi = $row ['id'];
	$isi = mysql_real_escape_string ($_POST ['isikomentar']);
	$waktu = time ();
	$sql = "Insert into tbkomunikasi set
										waktu = '$waktu',
										id_materi = '$id_materi',
										id_anggota = '$id_anggota',
										isi = '$isi',
										tipe = 2 ";
	$_SESSION['kutipan']=null;
	mysql_query($sql);
}
//jika ada aksi
	if (isset($_GET['aksi']))
	{
		if ($_GET['aksi']=='hapuskomentar')
		{
		$sql_kom ="DELETE FROM tbkomunikasi WHERE id_kom='$_GET[id_kom]'";
		mysql_query($sql_kom);
	}
	elseif ($_GET['aksi']== 'balaskomentar')
	{
		$sql_kom = "SELECT isi,id_anggota FROM tbkomunikasi WHERE id_kom='$_GET[id_kom]'";
		$data_kom =mysql_query($sql_kom);
		$datakutipan = mysql_fetch_assoc($data_kom);
		$_SESSION['kutipan']= $datakutipan['isi'];
	}
}//akhir aksi
else
{
	$_SESSION['kutipan']=NULL;
}
?>

<html>
<head>
<link href="plugin/bootstrap.min.css" type="text/css" rel="stylesheet">    
<link href="plugin/bootstrap-themes.css" type="text/css" rel="stylesheet">    
</head>
<body>
<table width="80%">
<tr>
	<td>
	<?php 
		if (!empty($_SESSION['kutipan']))
		{
			$balasan_anggota = $fungsi->idanggota_to_username($datakutipan['id_anggota'])['nama_lengkap'];
			$isi =
			"<blockquote>
			Membalas komentar ". $balasan_anggota.
			"<p>".$_SESSION['kutipan']."</p>".
			"</blockquote>"
			;
		}
		else
		{
			$isi = null;
		}
	?>
<form action="tampil.php?id=<?php echo $row['id'] ?> " method="post">
	<textarea data-provide="markdown" name="isikomentar" cols="40"><?php echo $isi; ?>
</textarea>
	<input type="submit" name="kirimkomentar" value="Kirim">
</form>
</tr>
</table>

<h3> Komentar </h3>
<?php 
//daftar komentar
$id_materi = $_GET['id'];
$sql = "select * FROM tbkomunikasi WHERE id_materi= '$id_materi' ORDER BY waktu DESC";
$data = mysql_query($sql);
while ($row = mysql_fetch_assoc($data))
{
	$namauser	= $row['id_anggota'];
	$isi		= $Parsedown -> text ($row['isi']);

?>

<table width="100%" border="1">
  <tr>
    <td><?php echo $fungsi ->idanggota_to_username($namauser)["nama_lengkap"]; ?> <?php echo date('d-F-Y H:i:s A', $row['waktu'])?></td>
	
  </tr>
  <tr>
    <td><?php echo $isi ?></td>
  </tr>
  <tr>
  	<td>Link : <a href="?id=<?php echo $_GET['id']; ?> &aksi=hapuskomentar&id_kom=<?php echo $row['id_kom']?>"> Hapus</a>
		<a href="?id=<?php echo $_GET['id']; ?> &aksi=balaskomentar&id_kom=<?php echo $row['id_kom']?>"> Balas</a>
	</td>
	</tr>
</table>
<?php
}//akhir komentar
?>

<!--  Scripts-->
<script src="plugin/bootstrap.min.js"></script>
<script src="plugin/jquery-2.1.4.min.js"></script>
<script src="plugin/markdown.js"></script>
</body>
</html>
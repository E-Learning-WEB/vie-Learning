<?php 
include 'koneksi.php';
if (isset($_POST['kirimforum']))
{
	include 'koneksi.php';
	$id_anggota = $_SESSION['id_anggota'];
	$isi = mysql_real_escape_string ($_POST ['isi']);
	$waktu = time ();
	
	$tipe =1;
	$id_materi =0;
	//jika balas komentar
	if(isset($_GET['id']))
	{
		$tipe=0;
		$id_materi = $_GET['id'];
	}
	$sql = "Insert into tbkomunikasi set
										judul = '$_POST[judul]',
										id_anggota = '$id_anggota',
										isi = '$isi',
										id_materi = '$id_materi',
										waktu = '$waktu',
										tipe = $tipe ";
	mysql_query($sql);
//	header("location:forum.php?id=$_GET[id]");
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

	} // akhir aksi
else
{
	$_SESSION['kutipan'] = NULL;
}
?>
<html>
<head>
<link href="../plugin/bootstrap.min.css" type="text/css" rel="stylesheet">    
<link href="../plugin/bootstrap-themes.css" type="text/css" rel="stylesheet">    
</head>
<body>
<?php
$judul_input = 'Input Forum Baru';
if(isset($_GET['id']))
{
	$judul_input = 'Balas Forum';
} 
?>
<h3><?php echo $judul_input ?></h3>
<form method="post" action="forumdaftar2.php">
	<input type="text" name="judul" placeholder="judul" />
	<?php
	if(!empty($_SESSION['kutipan']))
	{
		$balasan_anggota = $fungsi->idanggota_to_username($datakutipan['id_anggota'])['nama_lengkap'];
		var_dump ($balasan_anggota);
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

	<textarea data-provide="markdown" name="isi" cols="40"><?php echo $isi ?></textarea>
	<input type="submit" name="kirimforum" value="Kirim" />
</form>
</body>
</html>

<script src="../plugin/bootstrap.min.js"></script>
<script src="../plugin/jquery-2.1.4.min.js"></script>
<script src="../plugin/markdown.js"></script>

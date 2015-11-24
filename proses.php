<?php
session_start();
if(isset($_POST['kirimkomentar_materi']))
{
	//proses
	$id_anggota = $_SESSION['id_anggota'];
	include 'koneksi.php';
	$id_materi = $_POST['id'];
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

	$pesan = "sukses";
	$redirect = header("refresh:5;url=http://localhost/twenty/tampil2.php?id=$_POST[id]");
} //akhir kirim komentar materi
if (isset($_GET['aksi']))
{
	if($_GET['aksi'] == 'hapus-balasanforum')
	{
	include 'koneksi.php';
	$id_komunikasi = $_GET['id_kom'];
	$sql = "DELETE FROM tbkomunikasi WHERE id_kom = $id_komunikasi";
	mysql_query($sql);
	
 $pesan="sukses";
 $redirect = header ("refresh:5;url=http://localhost/twenty/forum/forum.php?id=$_GET[id]");
 }	
 	//proses hapus topikforum
 	if($_GET['aksi']=='hapus-topikforum')
	{
		include 'koneksi.php';
		$sql="UPDATE tbkomunikasi SET status = 2 WHERE id_kom= $_GET[id]";
		mysql_query($sql);
		echo $sql;
		header("refresh:2;url=http://localhost/twenty/forumdaftar2.php");
		$pesan="Topik sudah dihapus";
 }
}
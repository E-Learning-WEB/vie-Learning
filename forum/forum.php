<?php

//template
include('koneksi.php');
include('function.php');
include('plugin/parsedown.php');

//include('koneksi.php');
//include('function.php');
//include('plugin/parsedown.php');
$Parsedown = new Parsedown();

$id = $_GET['id'];
$sql = "SELECT * FROM tbkomunikasi WHERE id_kom=$id AND tipe=1 AND status=0";
$data = mysql_query($sql);
$row = mysql_fetch_assoc($data);

//check status hapus
if (mysql_num_rows($data)==0)
{
	echo "forum telah dihapus";
}
else
{
?>
<table width="100%" border="1">
  <tr>
    <td><?php echo $fungsi ->idanggota_to_username($row['id_anggota'])['nama_lengkap']; ?> </td>
  </tr>
  <tr>
    <td><?php echo $Parsedown ->text($row['isi']) ?></td>
  </tr>
    <tr>
  	<td>Link : <a href="proses.php?aksi=hapus-topikforum&id=<?php echo $_GET['id']; ?>"> Hapus</a>
		<a href="?id=<?php echo $_GET['id']; ?>&aksi=balaskomentar&id_kom=<?php echo $row['id_kom']?>"> Balas</a>
	</td>
	</tr>

</table>

<?php 
//fungsi untuk menampilkan balasan yang ada diforum
$sql = "SELECT * FROM tbkomunikasi WHERE id_materi=$id AND tipe=0";
$data = mysql_query($sql);
$row = mysql_fetch_assoc($data);
while ($row = mysql_fetch_assoc($data))
{
?>
<table width="100%" border="1">
  <tr>
    <td><?php echo $fungsi ->idanggota_to_username($row['id_anggota'])['nama_lengkap']; ?> </td>
  </tr>
  <tr>
    <td><?php echo $Parsedown ->text($row['isi']) ?></td>
  </tr>
    <tr>
  	<td>Link : <a href="proses.php?aksi=hapus-balasanforum&id=<?php echo $_GET['id']; ?>&id_kom=<?php echo $row['id_kom']?>"> Hapus</a>
		<a href="?id=<?php echo $_GET['id']; ?>&aksi=balaskomentar&id_kom=<?php echo $row['id_kom']?>"> Balas</a>
	</td>
	</tr>

</table>

<?php 
}
include 'baru.php';
?>

<?php 
} //cek status hapus
?>
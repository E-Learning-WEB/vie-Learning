<?php

		include('koneksi.php');
?>

<table width="100% " border="1">
  <tr>
    <td>Judul</td>
    <td>Waktu</td>
  </tr>
  <?php
  	$sql = 'SELECT * FROM tbkomunikasi WHERE tipe = 1 AND  status = 0';
	$data = mysql_query($sql);
	while ($row = mysql_fetch_assoc($data))
	{
  ?>
  <tr>
    <td><a href="forum2.php?id=<?php echo $row['id_kom']?>">
	<?php echo $row['judul']?>
	</a></td>
    <td><?php echo date('d-F-Y H:i:s A', $row['waktu'])?></td>
  </tr>
<?Php
}
?>
</table>

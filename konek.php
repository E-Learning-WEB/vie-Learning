<form action="konek.php" method="post">
	kriteria : <select name="kriteria">
					<option value="Id"> id </option>
					<option value="topik"> topik </option>
					<option value="detail"> detail </option>
					<option value="name"> name </option>
					<option value="email"> email </option>
					<option value="datetime"> datetime </option>
					<option value="view"> view </option>
					<option value="reply"> reply </option>
				</select>
	kondisi <input type="text" name="cari" size="20" maxlength="50">
	<input type="submit" name="filter" value="filter">
	</form>
	
<?php
	mysql_connect("localhost","root","");
	mysql_select_db("test");
		if (isset($_POST['filter']))
		{
			$kriteria = $_POST['kriteria'];
			$cari = $_POST['cari'];
			$sql = "select * from forum_q where $kriteria like '%$cari%'";
			echo $sql;
			$data = mysql_query($sql) or die ("sql");
		}
		else
		{
	$sql = "select * from forum_q"; 
	$data = mysql_query($sql) or die ("$sql");
		}
?>
<table width="100%" border="1">
	<tr>
		<th> Id </th>
		<th> topik </th>
		<th> detail </th>
		<th> name </th>
		<th> email </th>
		<th> datetime </th>
		<th> view </th>
		<th> reply </th>
	</tr>
<?php
	while ($row = mysql_fetch_assoc($data))
	{?>
		<tr>
			<td><?php echo $row ['Id'];?></td>
			<td><?php echo $row ['topik'];?></td>
			<td><?php echo $row ['detail'];?></td>
			<td><?php echo $row ['name'];?></td>
			<td><?php echo $row ['email'];?></td>
			<td><?php echo $row ['datetime'];?></td>
			<td><?php echo $row ['view'];?></td>
			<td><?php echo $row ['reply'];?></td>
		</tr>
<?php
	}?>
	</table>
		
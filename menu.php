			<header id="header" class="alt">
				<h1 id="logo"><a href="index.html">Twenty <span>by HTML5 UP</span></a></h1>
				<nav id="nav">
	<?php 
	session_start();
	if (isset($_SESSION['status']) && $_SESSION['status']=='Admin')
	{
		?>
    
					<ul>
						<li class="current"><a href="logout.php">Logout</a></li>
						<li class="submenu">
							<a href="">Menu</a>
							<ul>
								<li><a href="anggota.php">Anggota</a></li>
								<li><a href="forumdaftar2.php">Forum</a></li>
								<li class="submenu">
									<a href="">Materi</a>
									<ul>
										<li><a href="menumateri.php">Biologi X</a></li>
										<li><a href="menumateri.php">Biologi XI</a></li>
										<li><a href="menumateri.php">Biologi XII</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
	<?php
	}
	else
	{
	?>
				<ul>
						<li class="current"><a href="login2.php">Login</a></li>
						<li class="submenu">
							<a href="">Menu</a>
							<ul>
								<li><a href="#">VIdeo</a></li>
								<li><a href="right-sidebar.php">Forum</a></li>

								<li class="submenu">
									<a href="">Materi</a>
									<ul>
										<li><a href="menumateri.php">Biologi X</a></li>
										<li><a href="menumateri.php">Biologi XI</a></li>
										<li><a href="menumateri.php">Biologi XII</a></li>
									</ul>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
	<?php
	}?>  
  </section>

</header>
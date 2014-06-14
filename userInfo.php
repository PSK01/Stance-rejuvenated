//this code is for the first submit button
<?php
        include_once('db.php');
        $username = $_POST['username'];
        $email = $_POST['email'];
		$title = $_POST['title'];
		$shortlink = $_POST['shortlink'];
		$description = $_POST['description'];
        if(mysql_query("INSERT INTO thread (username,email,title,shortlink,description) VALUES('$username', '$email', '$title', '$shortlink', '$description')"))
        echo "Successfully Inserted";
        else
        echo "Insertion Failed";
?>

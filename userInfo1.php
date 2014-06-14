//this code is for the second submit button
<?php
        include_once('db.php');
        $message = $_POST['content_txt'];
        if(mysql_query("INSERT INTO add_delete_record (content) VALUES('$message')"))
         echo "Successfully Inserted";
        else
        echo "Insertion Failed";
?>

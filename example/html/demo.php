<?php

class demo{
    public function staticUrl()
    {
        return "../";
    }
}
?>

<?php 
$demo = new demo();
?>
<!DOCTYPE html>
<html>
<head>
    <title>demo</title>
    <link rel="stylesheet" type="text/css" href="<?php echo $demo->staticUrl()?>css/mailing.css">
</head>
<body>
    <table class="table" cellpadding="0" cellspacing="0">
        <tr>
            <td>
                test
            </td>
            <td class="td">
                td class
            </td>
        </tr>
    </table>
</body>
</html>
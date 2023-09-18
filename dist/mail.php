<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name'];
$surname = $_POST['user_surname'];
$email = $_POST['user_email'];
$phone = $_POST['user_phone'];
$message = $_POST['user_message'];
$policy = $_POST['user_policy'];

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = ''; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = ''; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('','100DniDoMatury'); // от кого будет уходить письмо?
$mail->addAddress('');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Клиент оставил сообщение!';
$mail->Body    = '
Client name: ' .$name . '<br>
Client surname : ' .$surname. '<br>
Client email: ' .$email. '<br>
Client phone number: ' .$phone. '<br><br>
Client message: ' .$message. '<br><br>
Policy checkbox: ' .$policy;

$mail->AltBody = '';

if(!$mail->send()) {
    // echo 'Error';
    return false;
} else {
    // header('location: index.html');
    return true;
}
?>

<!-- <p class="descr"> Your message has been sent! I will response as soon as possible!</p> -->
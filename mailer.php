<?php
    // Get the form fields, remove html tags and whitespace
    $name = strip_tags(trim($_POST["name"]));
    $name = str_replace(array("\r", "\n"),array(" ", " "), $name);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    // Check data, if no good redirect to index.html with error code
    if (empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        header("Location: https://dmyasnyankin.github.io/tachki_with_jonah/index.php?success=-1#contact");
        exit;
    }

    // Set recipient email addy
    $recipient = "dennis415@live.com";

    // Set email subject
    $subject = "New contact from $name";

    // Build email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Build email headers
    $email_headers = "From: $name <$email>";

    // Send email
    mail($recipient, $subject, $email_content, $email_headers);

    // Redirect to index.html with success code
    header("Location: https://dmyasnyankin.github.io/tachki_with_jonah/index.php?success=1#contact");


?>
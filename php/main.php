<?php
// Check if form was submitted
if ($_SERVER["REQUEST_METHOD"] === "POST") {

    // --- Sanitize Form Inputs ---
    $name         = htmlspecialchars(trim($_POST['name'] ?? ''));
    $company      = htmlspecialchars(trim($_POST['company'] ?? ''));
    $email        = htmlspecialchars(trim($_POST['email'] ?? ''));
    $countryCode  = htmlspecialchars(trim($_POST['country_code'] ?? ''));
    $phoneNumber  = htmlspecialchars(trim($_POST['mobile'] ?? ''));
    $markets      = htmlspecialchars(trim($_POST['markets'] ?? ''));
    $demoSlot     = htmlspecialchars(trim($_POST['demo_slot'] ?? ''));
    $challenges   = htmlspecialchars(trim($_POST['challenges'] ?? ''));
    $walkthrough  = htmlspecialchars(trim($_POST['walkthrough'] ?? ''));

    // --- VALIDATION ---

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "<script>alert('Please enter a valid email.'); window.history.back();</script>";
        exit();
    }

    // Validate phone number for India (if +91)
    if ($countryCode === "+91" && !preg_match("/^\d{10}$/", $phoneNumber)) {
        echo "<script>alert('Enter a valid 10-digit Indian phone number.'); window.history.back();</script>";
        exit();
    }

    // --- Email Setup ---
    $to = "sriethiraj@getnos.io";
    $subject = "Schedule Your Personalized Demo Today";

    date_default_timezone_set("Asia/Kolkata");
    $submittedAt = date("d-m-Y H:i A");

    // --- Email Body ---
    $message  = "New Demo Booking Submission:\n\n";
    $message .= "Name: $name\n";
    $message .= "Company: $company\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $countryCode $phoneNumber\n";
    $message .= "Markets to Crack: $markets\n";
    $message .= "Preferred Demo Slot: $demoSlot\n";
    $message .= "Top Trading Challenges: $challenges\n";
    $message .= "Walkthrough Requests: $walkthrough\n";
    $message .= "Submitted On: $submittedAt\n";

    $headers = "From: hello@getnos.io\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // --- Send Email ---
    if (mail($to, $subject, $message, $headers)) {

        // Redirect to thank you page
        header("Location: thank-you.html");
        exit();

    } else {
        echo "<script>alert('Error sending email. Please try again later.'); window.location.href='index.html';</script>";
        exit();
    }
    
} else {
    header("Location: index.html");
    exit();
}
?>

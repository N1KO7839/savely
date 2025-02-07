export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; box-sizing: border-box;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            background-color: #f4f4f4;
            color: #333333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            position: relative;
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        img {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 64px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            color: #6200ea;
        }
        .content {
            padding: 20px;
            text-align: center;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .verification-code {
            display: inline-block;
            padding: 15px 30px;
            margin-top: 20px;
            background-color: #6200ea;
            color: #ffffff;
            border-radius: 4px;
            font-size: 24px;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/KavAbpT.png" alt="logo" />
            <h1>Email Verification</h1>
        </div>
        <div class="content">
            <p>Thank you for signing up with Savely! Please verify your email address using the code below.</p>
            <div class="verification-code">{verificationCode}</div>
        </div>
        <div class="footer">
            <p>If you did not sign up for this account, you can ignore this email.</p>
        </div>
    </div>
</body>
</html>
`

export const WELCOME_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; box-sizing: border-box;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to Savely</title>
    <style>
        body {
            background-color: #f4f4f4;
            color: #333333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            position: relative;
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        img{
            position : absolute;
            top: 10;
            left: 10;
            width: 64px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            color: #6200ea;
        }
        .content {
            padding: 20px;
            text-align: left;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #6200ea;
            color: #ffffff;
            border-radius: 4px;
            text-decoration: none;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/KavAbpT.png" alt="logo" />
            <h1>Welcome to Savely</h1>
        </div>
        <div class="contentI">
            <p>Dear {userName},</p>
            <p>We are thrilled to have you on board! Savely offers a wide range of features designed to help you achieve your goals.</p>
            <p>Thank you for joining us!</p>
        </div>
        <div class="footer">
            <p>&copy; {currentYear} Savely. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
export const FORGOT_PASSWORD_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; box-sizing: border-box;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reset Your Password</title>
    <style>
        body {
            background-color: #f4f4f4;
            color: #333333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            position: relative;
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        img {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 64px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            color: #6200ea;
        }
        .content {
            padding: 20px;
            text-align: left;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin-top: 20px;
            background-color: #6200ea;
            color: #ffffff;
            border-radius: 4px;
            text-decoration: none;
            font-size: 16px;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/KavAbpT.png" alt="logo" />
            <h1>Reset Your Password</h1>
        </div>
        <div class="content">
            <p>Dear {userName},</p>
            <p>We received a request to reset your password. Click the button below to reset it.</p>
            <a href="{resetLink}" class="button">Reset Password</a>
            <p>If you did not request a password reset, please ignore this email.</p>
        </div>
        <div class="footer">
            <p>&copy; {currentYear} Savely. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
export const RESET_PASSWORD_SUCCESS = `
<!DOCTYPE html>
<html lang="en" style="margin: 0; padding: 0; box-sizing: border-box;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset Successful</title>
    <style>
        body {
            background-color: #f4f4f4;
            color: #333333;
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
        }
        .container {
            position: relative;
            width: 80%;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        img {
            position: absolute;
            top: 10px;
            left: 10px;
            width: 64px;
        }
        .header {
            text-align: center;
            padding: 20px 0;
        }
        .header h1 {
            margin: 0;
            font-size: 28px;
            color: #6200ea;
        }
        .content {
            padding: 20px;
            text-align: left;
        }
        .content p {
            font-size: 16px;
            line-height: 1.6;
            margin: 10px 0;
        }
        .footer {
            text-align: center;
            padding: 20px 0;
            font-size: 12px;
            color: #888888;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <img src="https://i.imgur.com/KavAbpT.png" alt="logo" />
            <h1>Password Reset Successful</h1>
        </div>
        <div class="content">
            <p>Dear {userName},</p>
            <p>Your password has been successfully reset. You can now log in with your new password.</p>
            <p>If you did not request this change, please contact our support team immediately.</p>
        </div>
        <div class="footer">
            <p>&copy; {currentYear} Savely. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
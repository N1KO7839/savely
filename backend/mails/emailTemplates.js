export const VERIFICATION_EMAIL_TEMPLATE = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Verify Your Email</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #121212;
            margin: 0;
            padding: 20px;
            color: #e0e0e0;
        }
        .container {
            display: flex;
            flex-direction: column;
            align-items: center;
            background-color: #1e1e1e;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            max-width: 600px;
            margin: 0 auto;
        }
        img {
            width: 50px;
            margin-bottom: 20px;
        }
        h1, h2, p {
            margin: 0 0 15px;
        }
        h1 {
            color: #bb86fc;
        }
        h2 {
            color: #03dac6;
            font-size: 40px;
        }
        p {
            color: #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hi there,</h1>
        <p>This is your verification code:</p>
        <h2><b>{verificationCode}</b></h2>
        <p>Enter it on the site to successfully register.</p>
        <p>All the best, Savely</p>
    </div>
</body>
</html>
`
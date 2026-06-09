<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouveau message — Portfolio Faustine</title>
  <style>
    body { margin: 0; padding: 0; background: #f9f6ef; font-family: 'DM Sans', Arial, sans-serif; }
    .wrapper { max-width: 560px; margin: 40px auto; background: #fff; border-radius: 16px; overflow: hidden; border: 1px solid #e8dece; }
    .header { background: #5c1a30; padding: 32px 36px; }
    .header h1 { margin: 0; font-size: 22px; color: #f4de9d; font-weight: 400; letter-spacing: -0.3px; }
    .header p { margin: 6px 0 0; font-size: 13px; color: #c4adb5; }
    .body { padding: 32px 36px; }
    .field { margin-bottom: 20px; }
    .label { font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: #b87313; margin-bottom: 4px; }
    .value { font-size: 15px; color: #3d0d1e; line-height: 1.6; }
    .message-box { background: #fdf9ee; border: 1px solid #f4de9d; border-radius: 10px; padding: 16px 20px; margin-top: 8px; }
    .footer { padding: 20px 36px; background: #f9f6ef; border-top: 1px solid #e8dece; font-size: 12px; color: #a8a59f; text-align: center; }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="header">
      <h1>Nouveau message reçu</h1>
      <p>Via le formulaire de contact du portfolio</p>
    </div>
    <div class="body">
      <div class="field">
        <div class="label">Expéditeur</div>
        <div class="value">{{ $name }}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:{{ $email }}" style="color:#b87313;">{{ $email }}</a></div>
      </div>
      <div class="field">
        <div class="label">Sujet</div>
        <div class="value">{{ $subject }}</div>
      </div>
      <div class="field">
        <div class="label">Message</div>
        <div class="message-box value">{{ $userMessage }}</div>
      </div>
    </div>
    <div class="footer">
      Portfolio Haïdara Faustine · {{ date('d/m/Y à H:i') }}
    </div>
  </div>
</body>
</html>

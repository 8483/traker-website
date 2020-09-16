let head = `
    <!DOCTYPE html>
    <html>
        <head>
            <title>Traker CRM - Целосна контрола врз Вашата компанија</title>
            <link rel="shortcut icon" href="/pics/favicon.ico" type="image/x-icon" />
            <link rel="icon" href="/pics/favicon.ico" type="image/x-icon" />
            
            <meta http-equiv="Content-Type" content="text/html" charset=utf-8" />
            <meta name ="description" content="Целосна контрола врз Вашата компанија. Сите информации на едно место, со неверојатна прегледност." />
            <meta name="robots" content="index, follow" />
        
            <meta property="og:title" content="Traker CRM" />
            <meta property="og:description" content="Целосна контрола врз Вашата компанија. Сите информации на едно место, со неверојатна прегледност." />
            <meta property="og:type" content="website" />
            <meta property="og:image" content="http://www.traker.mk/pics/devices-resized.png" />
            <meta property="og:url" content="http://www.traker.mk" />
            <meta property="og:site_name" content="Traker CRM" />

            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
            <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="style.css" />

            <link rel="stylesheet" type="text/css" href="/css/style.css" />

            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-175639160-1"></script>
            <script>
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-175639160-1');
            </script>

            <!-- Facebook Pixel Code -->
            <script>
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '1901625003312339');
                fbq('track', 'PageView');
            </script>
            <noscript>
                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1901625003312339&ev=PageView&noscript=1"/>
            </noscript>
            <!-- End Facebook Pixel Code -->

        </head>
        </body>
`;

module.exports = head;

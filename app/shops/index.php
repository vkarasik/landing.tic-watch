<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="Cache-control" content="no-cache">
		<meta http-equiv="Pragma" content="no-cache">
        <meta http-equiv="Expires" content="-1">
        <title>TicWatch — умные часы</title>
        <?php include '../includes/head.html'; ?>
        <script src="<?php $_SERVER['DOCUMENT_ROOT']?>/js/yandex-map.js" defer></script>
        <script src="https://api-maps.yandex.ru/2.1/?apikey=c986c73a-2eed-4f35-b859-c0817772f4ee&lang=ru_RU"></script>
    </head>
    <body>
        <div class="container-fluid">
        <?php 
            include '../includes/header.html';
            include '../includes/shops.html';
            include '../includes/footer.html';
        ?>
        </div>
    </body>
</html>
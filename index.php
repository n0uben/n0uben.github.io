<?php include(realpath("./templates/header.php")) ?>

<main>
    <?php

    $page = $_GET["p"];

    if (!isset($page)) {
        require './templates/home.php';
    } else {
        switch ($page) {
            case 'home':
                require './templates/home.php';
                break;
            case 'legal':
                require './templates/mentions-legales.php';
                break;
            default:
                require './templates/404.php';
        }
    }
    ?>
</main>

<?php include(realpath("./templates/footer.php")); ?>

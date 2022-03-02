  
    <?php include(realpath("./templates/header.php")) ?>

    <main>
        <?php 

            $page = $_SERVER["REQUEST_URI"];

            if (!$page) {
                include(realpath("../templates/404.php"));
            }

            switch ($page) {

                // Accueil
                case '/':
                    include(realpath("./templates/home.php"));
                    break;
                case '/index.php':
                    include(realpath("./templates/home.php"));
                    break;

                // Mentions legales
                case '/mentions-legales':
                    include("mentions-legales.php");
                    break;
                
                default:
                    include(realpath("./templates/404.php"));
                    break;
            }
        ?>
    </main>
    
    <?php include(realpath("./templates/footer.php")); ?>

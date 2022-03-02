  
    <?php include("./templates/header.php") ?>

    <main>
        <?php 

            $page = $_SERVER["REQUEST_URI"];

            if (!$page) {
                include("../templates/404.php");
            }

            switch ($page) {

                // Accueil
                case '/':
                    include('./templates/home.php');
                    break;
                case '/index.php':
                    include('./templates/home.php');
                    break;

                // Mentions legales
                case '/mentions-legales':
                    include('./templates/mentions-legales.php');
                    break;
                
                default:
                    include("./templates/404.php");
                    break;
            }
        ?>
    </main>
    
    <?php include("./templates/footer.php"); ?>

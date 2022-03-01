  
    <?php include("./header.php") ?>

    <main>
        <?php 
        
            $page = $_SERVER['REQUEST_URI'];

            switch ($page) {

                case '/n0uben.github.io/mentions-legales.php':
                    include('./mentions-legales.php');
                    break;
                
                default:
                    include('./home.php');
                    break;
            }
             

        ?>
    </main>
    
    <?php include("./footer.php"); ?>

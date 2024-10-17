    const quizzes = {
        html: [
        {
            question: "Qu'est-ce que HTML ?",
            answers: {
            a: "Un langage de programmation",
            b: "Un langage de balisage",
            c: "Un langage de style",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel élément HTML est utilisé pour définir un lien ?",
            answers: {
            a: "<link>",
            b: "<a>",
            c: "<url>",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel attribut est utilisé pour spécifier une image dans une balise <img> ?",
            answers: {
            a: "src",
            b: "href",
            c: "image",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel élément HTML est utilisé pour créer une liste à puces ?",
            answers: {
            a: "<ol>",
            b: "<ul>",
            c: "<li>",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment créer une table en HTML ?",
            answers: {
            a: "<table>",
            b: "<tab>",
            c: "<tr>",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel élément est utilisé pour insérer un saut de ligne ?",
            answers: {
            a: "<break>",
            b: "<br>",
            c: "<nl>",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel attribut doit être ajouté pour rendre un champ de formulaire obligatoire ?",
            answers: {
            a: "required",
            b: "mandatory",
            c: "obligatory",
            },
            correctAnswer: "a",
        },
        {
            question: "Quelle balise est utilisée pour le texte en gras ?",
            answers: {
            a: "<strong>",
            b: "<b>",
            c: "<bold>",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel élément est utilisé pour créer un en-tête dans un document HTML ?",
            answers: {
            a: "<head>",
            b: "<header>",
            c: "<h1>",
            },
            correctAnswer: "c",
        },
        {
            question: "Quel attribut est utilisé pour spécifier une cible pour un lien ?",
            answers: {
            a: "target",
            b: "href",
            c: "link",
            },
            correctAnswer: "a",
        },
        ],
        
        javascript: [
        {
            question: "Qu'est-ce que JavaScript ?",
            answers: {
            a: "Un langage de balisage",
            b: "Un langage de programmation",
            c: "Un framework",
            },
            correctAnswer: "b",
        },
        {
            question: "Quelle méthode est utilisée pour sélectionner un élément par son ID ?",
            answers: {
            a: "getElementById()",
            b: "querySelector()",
            c: "getElement()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel symbole est utilisé pour les commentaires en ligne ?",
            answers: {
            a: "//",
            b: "#",
            c: "/*",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment déclarer une variable en JavaScript ?",
            answers: {
            a: "var",
            b: "let",
            c: "const",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour créer une fonction en JavaScript ?",
            answers: {
            a: "function",
            b: "method",
            c: "define",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel type de données représente une valeur vraie ou fausse ?",
            answers: {
            a: "String",
            b: "Boolean",
            c: "Number",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment créer un tableau en JavaScript ?",
            answers: {
            a: "[]",
            b: "{}",
            c: "()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quelle méthode est utilisée pour ajouter un élément à la fin d'un tableau ?",
            answers: {
            a: "push()",
            b: "pop()",
            c: "shift()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour créer une classe en JavaScript ?",
            answers: {
            a: "class",
            b: "object",
            c: "function",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel événement est déclenché lorsqu'un utilisateur clique sur un élément ?",
            answers: {
            a: "onclick",
            b: "onchange",
            c: "onhover",
            },
            correctAnswer: "a",
        },
        ],
    
        laravel: [
        {
            question: "Qu'est-ce que Laravel ?",
            answers: {
            a: "Un langage de programmation",
            b: "Un framework PHP",
            c: "Une base de données",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment créer un nouveau projet Laravel ?",
            answers: {
            a: "laravel new project",
            b: "php artisan make:project",
            c: "composer create-project",
            },
            correctAnswer: "c",
        },
        {
            question: "Quel fichier contient les routes dans Laravel ?",
            answers: {
            a: "routes/web.php",
            b: "app/routes.php",
            c: "config/routes.php",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment exécuter une migration dans Laravel ?",
            answers: {
            a: "php artisan migrate",
            b: "php artisan migrate:run",
            c: "php artisan migrate:execute",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel est l'ORM utilisé par Laravel ?",
            answers: {
            a: "Eloquent",
            b: "Doctrine",
            c: "Propel",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment créer un contrôleur dans Laravel ?",
            answers: {
            a: "php artisan make:controller",
            b: "php artisan new:controller",
            c: "php artisan create:controller",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel est le fichier de configuration pour les bases de données ?",
            answers: {
            a: ".env",
            b: "config/database.php",
            c: "database/config.php",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment récupérer les données d'une requête HTTP dans Laravel ?",
            answers: {
            a: "request()->input()",
            b: "request()->get()",
            c: "request()->fetch()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel est le système de routage de Laravel ?",
            answers: {
            a: "REST",
            b: "SOAP",
            c: "MVC",
            },
            correctAnswer: "c",
        },
        {
            question: "Comment créer une nouvelle migration dans Laravel ?",
            answers: {
            a: "php artisan make:migration",
            b: "php artisan create:migration",
            c: "php artisan new:migration",
            },
            correctAnswer: "a",
        },
        ],
    
        sql: [
        {
            question: "Qu'est-ce que SQL ?",
            answers: {
            a: "Un langage de programmation",
            b: "Un langage de requête",
            c: "Un système de gestion de bases de données",
            },
            correctAnswer: "b",
        },
        {
            question: "Quelle commande est utilisée pour sélectionner des données dans SQL ?",
            answers: {
            a: "GET",
            b: "SELECT",
            c: "FETCH",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel mot clé est utilisé pour ajouter une nouvelle ligne dans une table ?",
            answers: {
            a: "INSERT",
            b: "ADD",
            c: "UPDATE",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment mettre à jour des données dans une table SQL ?",
            answers: {
            a: "UPDATE",
            b: "MODIFY",
            c: "CHANGE",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour supprimer des données d'une table ?",
            answers: {
            a: "DELETE",
            b: "REMOVE",
            c: "DROP",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment créer une nouvelle table dans SQL ?",
            answers: {
            a: "CREATE TABLE",
            b: "NEW TABLE",
            c: "MAKE TABLE",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour définir une condition dans une requête SQL ?",
            answers: {
            a: "WHERE",
            b: "IF",
            c: "CASE",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment récupérer des données uniques d'une colonne ?",
            answers: {
            a: "UNIQUE",
            b: "DISTINCT",
            c: "DIFFERENT",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel symbole est utilisé pour le commentaire sur une seule ligne en SQL ?",
            answers: {
            a: "//",
            b: "--",
            c: "#",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment trier les résultats d'une requête SQL ?",
            answers: {
            a: "ORDER BY",
            b: "SORT",
            c: "ARRANGE",
            },
            correctAnswer: "a",
        },
        ],
    
        csharp: [
        {
            question: "Qu'est-ce que C# ?",
            answers: {
            a: "Un langage de script",
            b: "Un langage de programmation orienté objet",
            c: "Un framework",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel mot clé est utilisé pour déclarer une classe en C# ?",
            answers: {
            a: "class",
            b: "define",
            c: "object",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment déclarer une variable en C# ?",
            answers: {
            a: "int a;",
            b: "var a = 0;",
            c: "declare int a;",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel mot clé est utilisé pour créer un constructeur en C# ?",
            answers: {
            a: "new",
            b: "constructor",
            c: "public",
            },
            correctAnswer: "c",
        },
        {
            question: "Quelle méthode est utilisée pour afficher un message dans la console ?",
            answers: {
            a: "Console.WriteLine()",
            b: "Console.Display()",
            c: "Write()",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment créer un tableau en C# ?",
            answers: {
            a: "int[] arr = new int[5];",
            b: "int arr[5];",
            c: "array int arr = new int[5];",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour hériter d'une classe en C# ?",
            answers: {
            a: "extends",
            b: "inherits",
            c: ":", // Note: in C#, inheritance is done using the colon (:)
            },
            correctAnswer: "c",
        },
        {
            question: "Quelle structure de contrôle est utilisée pour les conditions en C# ?",
            answers: {
            a: "if",
            b: "switch",
            c: "while",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment créer une méthode en C# ?",
            answers: {
            a: "public void MyMethod()",
            b: "method MyMethod()",
            c: "create MyMethod()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour déclarer une interface en C# ?",
            answers: {
            a: "interface",
            b: "class",
            c: "type",
            },
            correctAnswer: "a",
        },
        ],
    
        python: [
        {
            question: "Qu'est-ce que Python ?",
            answers: {
            a: "Un langage de balisage",
            b: "Un langage de programmation",
            c: "Un système de gestion de bases de données",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment déclarer une variable en Python ?",
            answers: {
            a: "var x = 5",
            b: "x = 5",
            c: "let x = 5",
            },
            correctAnswer: "b",
        },
        {
            question: "Quelle méthode est utilisée pour afficher un message en Python ?",
            answers: {
            a: "print()",
            b: "echo()",
            c: "display()",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment créer une liste en Python ?",
            answers: {
            a: "[]",
            b: "{}",
            c: "()",
            },
            correctAnswer: "a",
        },
        {
            question: "Quel mot clé est utilisé pour définir une fonction en Python ?",
            answers: {
            a: "def",
            b: "function",
            c: "create",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment ajouter un élément à une liste en Python ?",
            answers: {
            a: "add()",
            b: "append()",
            c: "insert()",
            },
            correctAnswer: "b",
        },
        {
            question: "Quel est le symbole pour les commentaires en Python ?",
            answers: {
            a: "//",
            b: "#",
            c: "/*",
            },
            correctAnswer: "b",
        },
        {
            question: "Comment gérer les exceptions en Python ?",
            answers: {
            a: "try-except",
            b: "catch",
            c: "throw",
            },
            correctAnswer: "a",
        },
        {
            question: "Quelle est la méthode pour ouvrir un fichier en Python ?",
            answers: {
            a: "open()",
            b: "file()",
            c: "read()",
            },
            correctAnswer: "a",
        },
        {
            question: "Comment vérifier le type d'une variable en Python ?",
            answers: {
            a: "type()",
            b: "instanceof",
            c: "isinstance()",
            },
            correctAnswer: "a",
        },
        ],
    };
    
    export { quizzes };
    
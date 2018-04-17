

=== PREPARING FOR REACT ===

1. Build our own JSON API



2. Build a SPA (Singgle Page Apps) with API 


=== Defining Our API Gameplan ==


=== THE DATA! ===


    Field               Type

    name                String

    completer           Boolean

    createDate          Date





=== THE ROUTES ===

		Verb            Route                   Description

	1   GET             /api/todos              List all todos

	2   POST            /api/todos              Create new todo

	3   GET             /api/todos/:todold      Retrieve a todo

	4   PUT             /api/todos/:todold      Update a todo

	5   DELETE          /api/todos/:todold      Delete a todo



== RESPONDING WITH JSON ==

	app.get('/', function(req, res) {
		res.send("")
	});

	// using res.json
	app.get('/', function(req, res) {
		res.json({message: "Hi FROM JS OBEJCT"});
	});


res.send is a parent from res.json stringfy



==INSTALLING mongodb ==

	1. sudo apt-get install -y mongodb-org // in ubuntu
		sudo dnf install -y mongodb-org // in fedora

	2. mkdir data

	3. npm insatll mongose --save

	4. echo 'mongod --bind_isp=$IP --dbpath=data --nojournal --rest "$@" ' > mongod

	5. chmod a+x mongod

	6./mongod


== Defining The Index Route ==

== Defining The Create Route ==

.- installing postman

.- nmp --save body-parser



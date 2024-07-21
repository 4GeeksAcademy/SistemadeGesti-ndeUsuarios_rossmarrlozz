const users = [];

        function registerUser() {
            const email = prompt('Ingrese su email:');
            const password = prompt('Ingrese su contraseña:');
            
            let userExists = false;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email) {
                    userExists = true;
                    break;
                }
            }

            if (userExists) {
                alert('El email ya está registrado.');
            } else {
                users.push({ email: email, password: password, products: [] });
                alert('Usuario registrado exitosamente.');
            }
        }



        function loginUser() {
            const email = prompt('Ingrese su email:');
            const password = prompt('Ingrese su contraseña:');
            
            let user = null;
            for (let i = 0; i < users.length; i++) {
                if (users[i].email === email && users[i].password === password) {
                    user = users[i];
                    break;
                }
            }

            if (user) {
                alert('Inicio de sesión exitoso. Bienvenido al sistema');
                return user;
            } else {
                alert('Email o contraseña incorrectos.');
                return null;
            }
        }

        function addProduct(user) {
            const productName = prompt('Ingrese el nombre del producto:');
            user.products.push(productName);
            alert('Producto agregado exitosamente.');
        }

        function viewProducts(user) {
            if (user.products.length === 0) {
                alert('No hay productos en la lista.');
            } else {
                let productList = 'Lista de productos:\n';
                for (let i = 0; i < user.products.length; i++) {
                    productList += '- ' + user.products[i] + '\n';
                }
                alert(productList);
            }
        }

        function main() {
            let isRunning = true;
            
            do {
                const choice = prompt('Seleccione una opción:\n1. Registrarse\n2. Iniciar sesión\n3. Salir');
                
                switch (choice) {
                    case '1':
                        registerUser();
                        break;
                    case '2':
                        const user = loginUser();
                        if (user) {
                            let isUserLoggedIn = true;
                            while (isUserLoggedIn) {
                                const userChoice = prompt('Seleccione una opción:\n1. Agregar producto\n2. Ver productos\n3. Cerrar sesión');
                                
                                switch (userChoice) {
                                    case '1':
                                        addProduct(user);
                                        break;
                                    case '2':
                                        viewProducts(user);
                                        break;
                                    case '3':
                                        isUserLoggedIn = false;
                                        alert('Sesión cerrada.');
                                        break;
                                    default:
                                        alert('Opción no válida, intente nuevamente.');
                                }
                            }
                        }
                        break;
                    case '3':
                        isRunning = false;
                        alert('Saliendo del programa...');
                        break;
                    default:
                        alert('Opción no válida, intente nuevamente.');
                }
            } while (isRunning);
        }

        main();
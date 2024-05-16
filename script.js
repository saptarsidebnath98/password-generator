const passwordDisplay = document.querySelector(".password");
        const generatePswdBtn = document.querySelector(".generatePasswordBtn");
        const passwordLength = 12;

        const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const numbers = "0123456789";
        const symbols = "~!@#$%^&*_+<>?/\=:;";
        const allChars = uppercase + lowercase + numbers + symbols;

        function generatePassword(){
            let password = "";
            password += uppercase[Math.floor(Math.random() * uppercase.length)];
            password += lowercase[Math.floor(Math.random() * lowercase.length)];
            password += numbers[Math.floor(Math.random() * numbers.length)];
            password += symbols[Math.floor(Math.random() * symbols.length)];

            while(passwordLength > password.length){
                password += allChars[Math.floor(Math.random() * allChars.length)];
            }
            
            passwordDisplay.textContent = password;
            passwordDisplay.value = password;
            console.log(passwordDisplay.value);
        }

        function copyPassword(){
            passwordDisplay.select()
            document.execCommand("copy");
        }
import { $, get_local_storage_object, save_object_to_local_storage } from '../helpers.js';

// for signing in the existing users
export function sign_in() {
    const sign_in_email = $('sign_in_email').value;
    const sign_in_pwd = $('sign_in_password').value;
    const master_obj = get_local_storage_object();
    const { users } = master_obj;
    if (users) {
        // to check if the user in present in the users object or not 
        const user = users.find((user) => user.email === sign_in_email && user.pwd === sign_in_pwd)
        if (user) {
            master_obj['loggedIn'] = true;
            master_obj['loggedInUser'] = user;
            save_object_to_local_storage(master_obj)
            window.location.href = "https://loving-pasteur-f03b72.netlify.app/index.html"
        } else {
            // wrong username and password
            alert('Invalid Username and Password')
        }
    }
}


// for signing up the new existing users
export function sign_up() {
    const master_obj = get_local_storage_object();
    let users = master_obj['users'] || [];
    master_obj['users'] = users;
    //adding new user info in users object
    users.push(
        {
            firstName: $('first-name').value,
            lastName: $('last-name').value,
            email: $('email').value,
            pwd: $('password').value,
            house: $('house-apartment').value,
            street: $('street').value,
            city: $('city').value,
            state: $('state').value,
            zip: $('zip').value
        }
    );
    save_object_to_local_storage(master_obj)
    master_obj['loggedIn'] = true;
    master_obj['loggedInUser'] = users[users.length - 1];
    save_object_to_local_storage(master_obj)
    window.location.href = document.referrer
}


//to logout the user
export function logout() {
    const master_obj = get_local_storage_object();
    master_obj['loggedIn'] = false;
    master_obj['loggedInUser'] = null;
    save_object_to_local_storage(master_obj);
    window.location.reload();
}
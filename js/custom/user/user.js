import { $, get_local_storage_object } from './../helpers.js';

export function show_user() {
    const master_obj = get_local_storage_object();
    const { loggedInUser } = master_obj;
    if (loggedInUser) {
        $('login-link').hidden = true;
        $('user-link').hidden = false;
        $('dropdownMenuLink').innerHTML = `Welcome, ${loggedInUser.firstName}`
    } else {
        $('login-link').hidden = false;
        $('user-link').hidden = true;
    }
}
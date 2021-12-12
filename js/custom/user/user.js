import { $, get_local_storage_object } from './../helpers.js';

export function show_user() {
    //get master object 
    const master_obj = get_local_storage_object();
    const { loggedInUser } = master_obj;
    //check login-in flag in master object
    if (loggedInUser) {
        $('login-link').hidden = true;
        $('user-link').hidden = false;
        $('dropdownMenuLink').innerHTML = `Welcome, ${loggedInUser.firstName}`
    } else {
        $('login-link').hidden = false;
        $('user-link').hidden = true;
    }
}
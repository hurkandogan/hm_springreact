export const registerValidation = (registerForm) => {

    let error: boolean = false;

    const username: HTMLElement | any = document.getElementById('username');
    const userRole: HTMLElement | any = document.getElementById('role');
    const password: HTMLElement | any = document.getElementById('password');
    const confirmPassword: HTMLElement | any = document.getElementById('confirmPassword');

    if (registerForm.username === "" || typeof registerForm.username !== "string") {
        username.classList.add('error');
        error = true;
    } else {
        username.classList.remove('error');
    }

    if (registerForm.role === "" || typeof registerForm.role !== "string") {
        userRole.classList.add('error');
        error = true;
    } else {
        userRole.classList.remove('error');
    }

    if (registerForm.password === "" || typeof registerForm.password !== "string") {
        password.classList.add('error');
        error = true;
    } else {
        password.classList.remove('error');
    }

    if (registerForm.confirmPassword < 0 || typeof parseFloat(registerForm.confirmPassword) !== "string") {
        confirmPassword.classList.add('error');
        error = true;
    } else {
        confirmPassword.classList.remove('error');
    }
    return error;
};
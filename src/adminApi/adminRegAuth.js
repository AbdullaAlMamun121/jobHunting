export const saveUserInDB = (phoneNumber,email,password,userRole) => {
    const currentUser = {
        number: phoneNumber,
        email: email,
        password:password,
        role: userRole,
    }

    fetch(`https://job-hunter-server-eight.vercel.app/users/${email}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    }).then(res => res.json()).then(data => {
        console.log(data)
        window.location.href="/dashboard/adminHome";
    }).catch(error => {
        console.error('Error saving user:', error);
      });
}

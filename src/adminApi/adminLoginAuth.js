export const loginUser = async (email, password) => {
    const user = { email, password };

    try {
      const response = await fetch('https://job-hunter-server-eight.vercel.app/login', {
        method: 'POST',
        headers: {
          'content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        const data = await response.json();
        const token = data.token;
        localStorage.setItem('token', token);
        console.log('Login successful'); 
        window.location.replace("/dashboard/adminHome");
      } else {
        const errorData = await response.json();
        console.error(errorData.message); 
      }
    } catch (error) {
      console.error('Error logging in user:', error);
    }
  };
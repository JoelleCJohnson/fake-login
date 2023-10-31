import { useState, useEffect } from "react"

export default function Login() {

    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [error, setError] = useState()

    useEffect(() => {
        if(isLoggedIn){
            document.title = "Watch your Back!"
        } else{
            document.title = "Enter if you dare!"
        }
    }, [isLoggedIn])

    const handleLoginForm = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        if(email === 'joellej221@gmail.com' && password === '123456'){ // we would NEVER hardcode this password in the real world. Not secure.
            setIsLoggedIn(true)
            setError()
        } else {
            setError('Invalid email or password')
        }
    }

    return (
        <main>
            <h2>Log in</h2>
            <section className="login-form">
                <form onSubmit={handleLoginForm}>

                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" />
                    </label>

                        {error &&
                            <p style={{ color: 'red' }}>{error}</p>
                        }

                    <input type="submit" value="Log in" />
                </form>
            </section>
        </main>
    )
}

import { useState, useEffect } from "react"

export default function Login() {

    const[isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        if(isLoggedIn){
            document.title = "Watch your Back!"
        } else{
            document.title = "Enter if you dare!"
        }
    }, [isLoggedIn])

    const handleLoginForm = (e) => {
        e.preventDefault()
    }

    return (
        <main>
            <h2>Log in</h2>
            <section className="login-form">
                <form onSubmit={() => handleLoginForm}>

                    <label htmlFor="email">
                        Email:
                        <input type="email" name="email" />
                    </label>

                    <label htmlFor="password">
                        Password:
                        <input type="password" name="password" />
                    </label>

                    <input type="submit" value="Log in" />
                </form>
            </section>
        </main>
    )
}

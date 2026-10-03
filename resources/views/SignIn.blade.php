<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet"  href="{{ asset('css/signin.css') }}">
    <a href="{{ route('SignIn') }}">SignIn</a>
</head>
<body>

<section class="account-page" id="signInPage">

    <div class="account-card">

        <p class="tiny-label">
            WORKBRIDGE ACCOUNT
        </p>

        <h1>
            Sign in
        </h1>

        <p>
            Choose your account type.
        </p>


        <div class="account-switch">

            <button class="active" type="button">
                Sign in
            </button>

            <button type="button">
                Create account
            </button>

        </div>


        <div class="choice-grid">

            <button class="choice" type="button">

                <b>Client</b>

                <span>
                    I am hiring — post a job and find a worker.
                </span>

            </button>


            <button class="choice" type="button">

                <b>Worker</b>

                <span>
                    I am looking for work — find and apply to jobs.
                </span>

            </button>

        </div>


        <form class="account-form">

            <label>
                Full name

                <input
                    type="text"
                    placeholder="Your full name"
                >
            </label>


            <label>
                Email

                <input
                    type="email"
                    required
                    placeholder="you@example.com"
                >
            </label>


            <label>
                Password

                <input
                    type="password"
                    minlength="6"
                    required
                    placeholder="At least 6 characters"
                >
            </label>


            <div class="form-links">

                <button
                    type="button"
                    class="text-link"
                >
                    Forgot password?
                </button>

            </div>


            <button
                class="pill-btn pill-orange full"
                type="submit"
            >
                Sign in →
            </button>

        </form>

    </div>

</section>

</body>
</html>
```

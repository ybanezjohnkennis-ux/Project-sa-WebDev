<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>HOMEs</title>

    <!-- CSS -->
    @vite('resources/css/app.css')
</head>

<body>

    <!-- Navigation -->
   

    <!-- Welcome Section -->
    <section id="welcome" class="screen welcome-screen active">

        <div class="welcome-inner">

            <!-- Brand -->
            <div class="mini-brand">
                <span class="mini-mark">W</span>
                <span>WORKBRIDGE</span>
            </div>

            <!-- Heading -->
            <p class="tiny-label">
                WORKFORCE DEVELOPMENT PLATFORM
            </p>

            <h1>
                Welcome!
                <span>What brings you here?</span>
            </h1>

            <p class="welcome-sub">
                Choose the path that best matches what you need today,
                or continue as a guest to explore the site first.
            </p>

            <!-- Role Selection -->
            <div class="role-grid">

                <!-- Client Card -->
                <button class="role-card client" data-role="client">

                    <div class="role-text">

                        <span class="role-label">I am a</span>

                        <strong>
                            Client,<br>
                            Looking for<br>
                            Talent.
                        </strong>

                        <span class="role-arrow">
                            Continue →
                        </span>

                    </div>

                    <div class="person person-1">
                        <span class="head"></span>
                        <span class="body"></span>
                    </div>

                </button>

                <!-- Worker Card -->
                <button class="role-card worker" data-role="worker">

                    <div class="role-text">

                        <span class="role-label">I am a</span>

                        <strong>
                            Worker,<br>
                            Looking for<br>
                            Work.
                        </strong>

                        <span class="role-arrow">
                            Continue →
                        </span>

                    </div>

                    <div class="person person-2">
                        <span class="head"></span>
                        <span class="body"></span>
                    </div>

                </button>

            </div>

            <!-- Guest Button -->
            <button class="guest-btn" id="guestBtn" type="button" onclick="window.location.href='{{ route('Opp') }}'">
                Continue as Guest →
            </button>

        </div>

    </section>

</body>
</html>
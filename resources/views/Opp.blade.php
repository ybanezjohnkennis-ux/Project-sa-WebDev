<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OPPORTUNITIES</title>
    <link rel="stylesheet"  href="{{ asset('css/opp.css') }}">
    <a href="{{ route('Opp') }}">Opportunity</a>
</head>
<body>

<section id="opportunities" class="screen opportunities-screen">

    <div class="screen-head left">

        <p class="tiny-label">
            FIND YOUR NEXT STEP
        </p>

        <h2>
            OPPORTUNITIES THAT<br>
            <span>MATCH YOUR SKILLS</span>
        </h2>

        <p>
            Browse by category, search by keyword, and open any role
            to review the full job post and application process.
        </p>

    </div>

    <div class="opportunities-wrap">

        <div class="category-bar" id="categoryBar">

            <button class="category-btn active" data-category="All Categories">
                All Categories
            </button>

            <button class="category-btn" data-category="Admin & Virtual Assistants">
                Admin & Virtual Assistants
            </button>

            <button class="category-btn" data-category="Customer Support">
                Customer Support
            </button>

            <button class="category-btn" data-category="Web & Tech">
                Web & Tech
            </button>

            <button class="category-btn" data-category="Content & Social Media">
                Content & Social Media
            </button>

            <button class="category-btn" data-category="Bookkeeping & Finance">
                Bookkeeping & Finance
            </button>

            <button class="category-btn" data-category="Creative & Design">
                Creative & Design
            </button>

            <button class="category-btn" data-category="AI & Automation">
                AI & Automation
            </button>

        </div>

        <div class="job-toolbar">

            <div class="filters">

                <button class="category-btn filter active" data-filter="all">
                    All
                </button>

                <button class="category-btn filter" data-filter="remote">
                    Remote
                </button>

                <button class="category-btn filter" data-filter="fulltime">
                    Full-time
                </button>

                <button class="category-btn filter" data-filter="parttime">
                    Part-time
                </button>

            </div>

            <input
                id="jobSearch"
                type="search"
                placeholder="Search opportunities..."
            >

        </div>

        <div class="job-grid" id="jobGrid"></div>

    </div>

</section>

</body>
</html>
```

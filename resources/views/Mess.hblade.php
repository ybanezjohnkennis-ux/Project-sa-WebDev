<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MESSAGES</title>
        <script scr="Mess.js"></script>
        <link rel="stylesheet" href="{{ asset('css/mess.css') }}">
        <a href="{{ route('Mess') }}">Messages</a>
</head>
<body>

<section id="messages" class="screen messages-screen">

    <div class="screen-head left">

        <p class="tiny-label">
            COMMUNICATION
        </p>

        <h2>
            MESSAGES & <span>CONNECTIONS</span>
        </h2>

        <p>
            Keep conversations with clients, employers,
            and collaborators in one place.
        </p>

    </div>

    <div class="messages-layout">

        <div class="conversation-list">

            <div class="conversation-list-head">
                <h3>Inbox</h3>
            </div>

            <div id="conversationList"></div>

        </div>

        <div class="chat-window">

            <div class="chat-head">

                <div class="chat-contact">

                    <div class="chat-avatar" id="chatAvatar">
                        W
                    </div>

                    <div>
                        <h3 id="chatName">
                            Select a conversation
                        </h3>

                        <p id="chatSub">
                            Messages will appear here.
                        </p>
                    </div>

                </div>

            </div>

            <div class="chat-messages" id="chatMessages"></div>

            <form class="chat-form" id="chatForm">

                <input
                    id="chatInput"
                    placeholder="Write a message..."
                    autocomplete="off"
                >

                <button class="pill-btn pill-orange">
                    Send
                </button>

            </form>

        </div>

    </div>

</section>

</body>
</html>

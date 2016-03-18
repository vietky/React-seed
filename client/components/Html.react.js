var React = require('react');

var Html = React.createClass({
    render: function () {
        return (
            <html>

            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link href="/styles/bootstrap.min.css" rel="stylesheet" />
            </head>

            <body>
                <section id="main" dangerouslySetInnerHTML={ {__html: this.props.markup } }>
                </section>

                <script src="/libs/jquery.min.js"></script>
                <script src="/libs/bootstrap.min.js"></script>
                <script src="/libs/react.js"></script>
                <script src="/libs/react-dom.js"></script>
                <script src="/libs/ReactRouter.min.js"></script>
                <script src="/libs/react-bootstrap.min.js"></script>
                <script src="http://localhost:8080/bundle.js"></script>
            </body>

            </html>
        );
    }
});

module.exports = Html;
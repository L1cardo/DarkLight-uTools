const cp = require('child_process')

window.exports = {
    'darklight': {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                cp.exec(
                    `osascript -e 'tell app "System Events" to tell appearance preferences to set dark mode to not dark mode'`,
                    (error, stdout, stderr) => {
                        if (error)
                            return window.utools.showNotification(stderr);
                        window.utools.outPlugin();
                    }
                )
            }
        }
    }
}

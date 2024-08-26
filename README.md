# LinkedIn Automation Chrome Extension

This Chrome extension automates certain actions on LinkedIn, such as unfollowing connections. It's designed as a tool to help manage large LinkedIn networks more efficiently.

## ⚠️ Disclaimer

**Use this extension at your own risk.** Automated interactions may violate LinkedIn's terms of service and could potentially lead to account restrictions or bans. This tool is provided for educational purposes only.

## Features

- Automates the process of unfollowing connections on LinkedIn
- Simple one-click activation from the extension popup
- Configurable delays to mimic human-like behavior

## Installation

1. Clone this repository or download the source code.
   ```
   git clone https://github.com/yourusername/linkedin-automation-extension.git
   ```

2. Open Google Chrome and navigate to `chrome://extensions/`.

3. Enable "Developer mode" using the toggle switch in the top right corner.

4. Click "Load unpacked" and select the directory containing the extension files.

5. The LinkedIn Automation extension should now appear in your Chrome toolbar.

## Usage

1. Navigate to the LinkedIn page where you want to perform the automation (e.g., your "Following" page).

2. Click the extension icon in the Chrome toolbar.

3. In the popup, click the "Start Automation" button.

4. The automation will begin and continue until manually stopped or the page is closed.

## Configuration

You can modify the `config` object in `popup.js` to adjust the extension's behavior:

- `delays`: Adjust timing between actions
- `selectors`: Update if LinkedIn's HTML structure changes
- `targetText`: Change the text of the button to be clicked (e.g., "Following")

## Files

- `manifest.json`: Extension configuration
- `popup.html`: User interface for the extension
- `popup.js`: Logic for the popup and automation
- `content.js`: Content script (minimal in this implementation)

## Development

To modify the extension:

1. Make changes to the relevant files.
2. If you modify `manifest.json`, you may need to reload the extension in `chrome://extensions/`.
3. For changes to other files, usually reloading the target webpage is sufficient.

## Limitations and Known Issues

- The automation runs continuously until manually stopped.
- LinkedIn's page structure may change, potentially breaking the selectors used in the script.
- There's no built-in mechanism to handle rate limiting or detection avoidance.

## Contributing

Contributions to improve the extension are welcome. Please feel free to submit issues or pull requests.

## License

[MIT License](LICENSE)

## Acknowledgements

This project is for educational purposes and is not affiliated with or endorsed by LinkedIn.

Remember to use web automation tools responsibly and in compliance with the terms of service of the websites you interact with.

# PureGym Activity
This is a basic Node.js script which uses Selenium Webdriver to fetch the current number of people at the user's default gym.

## Installation
The script currently uses Firefox's geckodriver, though can be easily modified to use any other driver. For more info, visit the [Selenium documentation](https://www.selenium.dev/documentation/getting_started/installing_browser_drivers/).

Besides that, all you need to do is install the dependencies.
```bash
$ npm install
```

## Usage
You will need to update two fields `<USER_EMAIL>` and `<USER_PIN>` with your own information for the script to work.

Once updated, simply run the file.
```bash
$ node index.js
```

## Contributing
All contributions are welcome. This is a small project for now, though if you have a suggestion feel free to open an issue or raise a pull request. Will work on adding tests soon.

## License
[MIT](LICENSE)
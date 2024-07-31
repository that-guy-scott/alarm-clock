# Angular Alarm Clock

This project is a simple yet functional digital alarm clock built with Angular. It features a sleek, modern design with a digital display and alarm functionality.

## Features

- Real-time digital clock display
- Date display
- Set and cancel alarms
- Visual and audio alarm notifications
- Responsive design

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v12.0 or higher)
- npm (v6.0 or higher)
- Angular CLI (v12.0 or higher)

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/angular-alarm-clock.git
   ```

2. Navigate to the project directory:
   ```
   cd angular-alarm-clock
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

1. Start the development server:
   ```
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200/`

3. Click on the time display to open the alarm setting form.

4. Set your desired alarm time and click "Set Alarm".

5. When the alarm goes off, click the alarm icon to stop it.

## Project Structure

- `app.component.*`: Main component for the clock display
- `alarm-form.component.*`: Component for setting alarms
- `alarm-clock.service.ts`: Service for managing clock and alarm functionality

## Customization

You can customize the appearance of the clock by modifying the CSS in `app.component.css`. The current design features a dark theme with a glowing effect for the time display.

## Contributing

Contributions to the Angular Alarm Clock project are welcome. Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- [Angular](https://angular.io/)
- [DS-Digital Font](https://www.dafont.com/ds-digital.font) for the clock display

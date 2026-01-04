# Portfolio Manager

A modern, full-stack portfolio management application built with Next.js 16, designed to help users track stocks, manage their portfolio, and stay updated with live market news.

## 🚀 Features

- **Real-time Stock Tracking**: Fetch live stock data using the Finnhub API.
- **Portfolio Management**: Add stocks to your portfolio and track their performance.
- **Watchlists**: Keep an eye on potential investments with personalized watchlists.
- **Live Market Data**: View top gainers, losers, and general market news.
- **Authentication**: Secure login and signup powered by Better-Auth (GitHub, Google, Credentials).
- **Automated Background Jobs**: Powered by Inngest for reliable event-driven processing.
- **Responsive Design**: Built with TailwindCSS v4 and Radix UI for a seamless experience across devices.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS v4](https://tailwindcss.com/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **Authentication**: [Better-Auth](https://www.better-auth.com/)
- **External API**: [Finnhub](https://finnhub.io/) (Stock Data)
- **Background Jobs**: [Inngest](https://www.inngest.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/) (Icons)

## 🏁 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Ensure you have the following installed:
- Node.js (v18 or later)
- npm, pnpm, or yarn

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/portfolio-manager.git
    cd portfolio-manager
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a `.env` file in the root directory and add the following variables:

    ```env
    # Database
    MONGODB_URI=your_mongodb_connection_string

    # Authentication (Better-Auth)
    BETTER_AUTH_SECRET=your_generated_secret
    BETTER_AUTH_URL=http://localhost:3000

    # Finnhub API
    NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key
    FINNHUB_API_KEY=your_finnhub_api_key

    # Inngest (Optional for local dev, required for prod)
    # INNGEST_SIGNING_KEY=...
    # INNGEST_EVENT_KEY=...
    ```

4.  **Run the development server:**

    ```bash
    npm run dev
    # or
    pnpm dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: Reusable UI components.
- `lib/`: Utility functions, types, and server actions.
- `Database/`: Mongoose models and database connection logic.
- `public/`: Static assets.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.


import React from 'react';

const AboutPage = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-12 text-gray-200">
            <section className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">About Portfolio Manager</h1>
                <p className="text-lg leading-relaxed text-gray-400">
                    Welcome to Portfolio Manager, a powerful and intuitive tool designed to help you take control of your financial future.
                    Whether you are a seasoned investor or just starting out, our platform provides the insights and tools you need to track,
                    analyze, and optimize your stock portfolio in real-time.
                </p>
                <p className="text-lg leading-relaxed text-gray-400">
                    Built with modern technology, Portfolio Manager ensures you have access to the latest market data,
                    comprehensive analytics, and a user-friendly interface that makes managing your investments effortless.
                </p>
            </section>

            <section className="space-y-8">
                <h2 className="text-3xl font-semibold tracking-tight text-white">How It Works</h2>
                <div className="grid gap-8 md:grid-cols-3">
                    <div className="p-6 space-y-4 border border-gray-800 rounded-lg bg-gray-900/50">
                        <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-blue-600 rounded-full text-white">
                            1
                        </div>
                        <h3 className="text-xl font-medium text-white">Create Your Portfolio</h3>
                        <p className="text-gray-400">
                            Sign up and start by adding stocks to your watchlist or portfolio. Simply search for any stock symbol to get started.
                        </p>
                    </div>

                    <div className="p-6 space-y-4 border border-gray-800 rounded-lg bg-gray-900/50">
                        <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-blue-600 rounded-full text-white">
                            2
                        </div>
                        <h3 className="text-xl font-medium text-white">Track Performance</h3>
                        <p className="text-gray-400">
                            Monitor your investments with real-time price updates and interactive charts. See how your portfolio performs over time.
                        </p>
                    </div>

                    <div className="p-6 space-y-4 border border-gray-800 rounded-lg bg-gray-900/50">
                        <div className="flex items-center justify-center w-12 h-12 text-xl font-bold bg-blue-600 rounded-full text-white">
                            3
                        </div>
                        <h3 className="text-xl font-medium text-white">Analyze & Optimize</h3>
                        <p className="text-gray-400">
                            Get detailed insights into your holdings. Use our analytical tools to make informed decisions and optimize your strategy.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

# Warehouse Tech Portfolio

Act as an expert full-stack web developer and UI/UX designer. Your task is to build a complete, single-file, fully responsive personal portfolio website.

The website must be created in a single HTML file. All CSS must be implemented using Tailwind CSS classes included via a CDN link, and all JavaScript must be included within <script> tags in the same HTML file.

Target Persona for the Portfolio:

The portfolio is for a Software Developer specializing in the warehouse technology sector within the retail market. The tone should be professional, modern, and clean.

Website Structure and Content:

Header & Navigation Bar:

A sticky navigation bar at the top of the page.

On the left, display the developer's name: "[Your Name]".

On the right, include navigation links: "About", "Projects", and "Contact".

These links must smoothly scroll to the corresponding sections on the page.

Hero/About Section (id="about"):

A welcoming headline, e.g., "Software Developer | Innovating Warehouse Technology".

A professional, high-resolution placeholder image for a headshot.

A sub-headline with your name, e.g., "Hi, I'm [Your Name]".

A brief bio (2-3 sentences). Write it from the perspective of a developer who bridges the gap between complex logistics and efficient software solutions in the retail space. Mention your passion for optimizing supply chains through code.

Include a prominent call-to-action button linking to your LinkedIn profile. The button text should be "Connect on LinkedIn". Next to it, add the text "My DMs are always open for hiring managers."

Projects Section (id="projects"):

A clear heading: "My Projects".

Use a responsive grid layout (1 column on mobile, 2 on tablets, 3 on desktops).

Create three distinct project cards with the following details:

Project 1: WMS Dashboard Pro

Image: A placeholder image representing a clean data dashboard.

Description: "A real-time Warehouse Management System (WMS) dashboard providing analytics on inventory levels, order fulfillment rates, and picker efficiency."

Technologies Used: React, D3.js, Node.js, PostgreSQL.

Project 2: OptiRoute AI

Image: A placeholder image representing a map with optimized routes.

Description: "An AI-powered algorithm that calculates the most efficient picking routes for warehouse staff, reducing travel time by an average of 15%."

Technologies Used: Python, TensorFlow, Flask, Google Maps API.

Project 3: ScanTrack Mobile

Image: A placeholder image showing a mobile app interface.

Description: "A cross-platform mobile app for inventory tracking using barcode and RFID scanning, ensuring 99.9% accuracy in stock management."

Technologies Used: Flutter, Firebase, GCP Vision AI.

Each card should have a subtle hover effect (e.g., lift or glow).

Contact Section (id="contact"):

A clear heading: "Get In Touch".

A simple, clean contact form with the following fields: "Your Name", "Your Email", and "Message".

A "Send Message" button. The button should not submit anywhere, but clicking it should trigger a JavaScript function that briefly shows a "Thank you for your message!" confirmation below the button.

Footer:

A simple footer with your name and the current year. e.g., "© [Your Name] 2025".

Styling and Design (Tailwind CSS):

Color Scheme: Use a modern, dark-themed palette. For example, a dark gray or navy background (bg-slate-900), slightly lighter gray for cards (bg-slate-800), and a vibrant accent color like teal or electric blue for buttons, links, and headings (text-cyan-400).

Typography: Use the "Inter" font from Google Fonts.

Spacing: Use generous padding and margins for a clean, uncluttered look.

Interactivity: Ensure all interactive elements (links, buttons, project cards) have clear hover and focus states.

Technical Requirements:

The final output must be a single HTML file.

The code must be well-commented, explaining the different sections.

The website must be fully responsive and look excellent on mobile, tablet, and desktop screens.

Use smooth-scrolling JavaScript for navigation links.

The contact form submission should be handled with a simple client-side JavaScript function to display a success message.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://amaannazir.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/bba4d132-4457-47f4-8815-4d2af583af2b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

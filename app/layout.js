
import "./globals.css";
import ThemeProvider from "./providers/ThemeProvider";

export const metadata = {
  title: "trip to Remember",
  description: "Diary for you memorable trip",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

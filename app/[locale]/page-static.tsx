export default function StaticPage() {
  return (
    <html>
      <head>
        <title>Static Test</title>
      </head>
      <body>
        <h1>Static Test Page</h1>
        <p>This is a static page without any locale processing.</p>
        <p>Current URL path: {typeof window !== 'undefined' ? window.location.pathname : 'Server-side'}</p>
      </body>
    </html>
  );
}

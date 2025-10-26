const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <h1>Main Layout</h1>
        <main>{children}</main>
        <h1>Main Layout</h1>
      </body>
    </html>
  );
};

export default MainLayout;

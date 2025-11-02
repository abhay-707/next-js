const dashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1>dashboard Header</h1>
      {children}
      <h1>dashboard Header</h1>
    </>
  );
};

export default dashboardLayout;

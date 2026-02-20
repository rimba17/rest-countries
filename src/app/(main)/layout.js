import Header from "@/components/Header";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-container px-4 lg:px-16 pt-24">
        {children}
      </main>
    </>
  );
};
export default Layout;

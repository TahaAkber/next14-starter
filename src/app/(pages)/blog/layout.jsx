const Layout = ({ children }) => {
  return (
    <div>
      <h2>This is child layout</h2>
      {children}
    </div>
  );
};
// if we not take children then it will not show child tag which is in this case page.jsx

export default Layout;

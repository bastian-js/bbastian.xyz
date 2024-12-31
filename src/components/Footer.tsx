const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <p className="footer-text text-center">{year} &copy; bastian</p>
    </div>
  );
};

export default Footer;

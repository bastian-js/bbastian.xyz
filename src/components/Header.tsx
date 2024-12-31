import "../WavingHand.css";

const Header = () => {
  return (
    <div>
      <img
        src="/profile_picture.png"
        alt="Heading Profile Picture"
        className="m-3 w-15"
      />
      <p className="fs-2">
        hey, i'm bastian
        <div className="waving-hand fs-2 m-2">👋</div>
      </p>
    </div>
  );
};
export default Header;

interface Props {
  text: string;
  icon: string;
  link: string;
  height?: string;
}

const Buttons = ({ text, icon, link, height }: Props) => {
  return (
    <>
      <div className="mt-3">
        <a href={link}>
          <button
            className={`social-button btn ms-3 w-50 d-inline-flex align-items-center justify-content-center`}
            style={{ height }}
          >
            <i
              className={`${icon} social-icon`}
              style={{ marginRight: "8px" }}
            ></i>{" "}
            {/* Space between icon and text */}
            {text}
          </button>
        </a>
      </div>
    </>
  );
};

export default Buttons;

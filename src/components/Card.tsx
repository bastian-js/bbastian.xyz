interface Props {
  img_src: string;
  img_alt: string;
  title: string;
  description: string;
  btn_link: string;
  btn_text: string;
  btn_color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
}
const Card = ({
  img_src,
  img_alt,
  title,
  description,
  btn_text,
  btn_link,
  btn_color,
}: Props) => {
  return (
    <div className="card w-100 h-auto ">
      <img
        src={"/projects/" + img_src}
        className="card-img-top"
        alt={img_alt}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={btn_link} className={"btn btn-" + btn_color}>
          {btn_text}
        </a>
      </div>
    </div>
  );
};
export default Card;

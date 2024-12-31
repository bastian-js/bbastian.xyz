interface Props {
  title: string;
  description: string;
}
const Card_AboutMe = ({ title, description }: Props) => {
  return (
    <div className="card card-aboutme w-100 h-auto p-4 mt-3">
      <div className="card-header fs-2">{title}</div>
      <div className="card-body">
        <p className="card-text fs-6">{description}</p>
      </div>
    </div>
  );
};
export default Card_AboutMe;

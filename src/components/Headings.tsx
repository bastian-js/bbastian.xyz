interface Props {
  title: string;
}

const Headings = ({ title }: Props) => {
  return <h2>{title}</h2>;
};

export default Headings;

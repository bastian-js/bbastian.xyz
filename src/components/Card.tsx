import React, { useState } from "react";
import Modal from "./Modal"; // Import the Modal component

interface Props {
  img_src: string;
  img_alt: string;
  title: string;
  description: string;
  long_description: string;
  btn_link: string;
  btn_text: string;
  btn_color:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info";
  btn2_link: string;
  btn2_text: string;
  btn2_color:
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
  long_description,
  btn_text,
  btn_link,
  btn_color,
  btn2_text,
  btn2_color,
  btn2_link,
}: Props) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="card w-100 h-auto">
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
          <a
            href={btn2_link}
            className={"btn ms-3 btn-" + btn2_color}
            onClick={openModal}
          >
            {btn2_text}
          </a>
        </div>
      </div>

      {/* Modal Component */}
      <Modal
        show={showModal}
        title={title}
        description={long_description}
        long_description={long_description}
        img_src={img_src}
        img_alt={img_alt}
        onClose={closeModal}
      />
    </>
  );
};

export default Card;

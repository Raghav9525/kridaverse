import React from 'react';
import background from "../img/background_img.jpg";

function Home() {
  const imgStyle = {
    width: 'fit-content',
    float: 'right',
    display: 'flex',
    mixBlendMode: 'multiply',
  };

  const cardOverlayStyle = {
    borderRadius: '30px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    background: 'rgba(255, 255, 255, 0.5)',
  };

  const doremonImgStyle = {
    width: 'fit-content',
    float: 'right',
    display: 'flex',
    mixBlendMode: 'multiply',
    filter: 'brightness(110%) contrast(120%)',
  };

  const containerStyle = {
    marginTop: '2rem',
  };

  const cardStyle = {
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  };

  return (
    <div className="container-fluid" style={containerStyle}>
      <div className="card " style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="row">

          {/* left container for About div */}
          <div className="col-sm-2"></div>
          <div className="col-sm-6 mt-4">
            <div className="card p-3" style={cardOverlayStyle}>
              <h4 className="mt-4 p-2"><b>About Me</b></h4>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur nesciunt eius esse voluptate omnis iste quos quam nulla officiis sed. Velit enim laborum, in harum libero, deserunt perspiciatis dolore consectetur fugit voluptatum quasi! Facilis deserunt cum, quam, quaerat cumque et numquam doloremque consequatur dolores maxime omnis labore ab saepe illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ipsa quibusdam aspernatur consequuntur ducimus sint, non nihil in dolorum laborum?</p>
            </div>
          </div>

          {/* right container for doremon image*/}
          <div className="col-sm-3">
            <img src={require("../img/doremon.jpg")} alt="Doremon" className="doremon" style={doremonImgStyle} />
          </div>
          <div className="col-sm-1"></div>
        </div>
      </div>


      <div className="container mt-2 mb-4">
        <div className="card mb-4" style={cardStyle}>
          <p className="text-center mt-4">Greeting!</p>
          <h4 className="text-center">Welcome to the website</h4>
          <div>
            <p className="text-center ms-4 me-4 justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ipsum dignissimos, sed laborum commodi adipisci sapiente eveniet eum dolor tenetur minima porro quam laboriosam vero itaque iusto laudantium? Quam neque sequi sunt repellat dicta. Sapiente voluptas maxime iure suscipit modi rerum natus dolorum quia temporibus expedita corrupti, est iste quasi cum, nemo esse ab ullam eaque voluptates vero blanditiis nulla consequuntur? Possimus non nisi assumenda delectus maiores et, vitae ratione sit, velit, recusandae at eaque debitis dolorum iure doloremque nesciunt quod. Fugiat enim inventore sapiente. Quia molestiae commodi ab earum odit facilis itaque, cupiditate corrupti sapiente, aspernatur neque voluptate asperiores.</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Home;

import React from 'react';

function About() {
  return (
    <div className="container-fluid mt-4">
      <div className="row mb-4">
        {/* left container */}
        <div className="col-sm-6 mt-4">
          <div className="card bg-dark text-light p-2" style={{height:"55vh"}}>
            <p className="mt-4 d-flex justify-content-center">Introduction</p>
            <p style={{ textAlign: 'justify' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolorem officiis quod dolore, ad eligendi 
              fugit quis esse modi cupiditate culpa iure nobis, quaerat perspiciatis quibusdam obcaecati suscipit 
              incidunt vel laborum sit ratione commodi! Unde deserunt et tenetur officiis, consectetur illum nulla 
              officia, voluptatum itaque ipsa quos pariatur adipisci saepe!
            </p>
          </div>
        </div>

        {/* right container */}
        <div className="col-sm-6">
          <div className="card p-2" style={{border:"none"}}>
            <div className="card rounded-4 p-2 mt-4" style={{ backgroundColor: '#f5f5f5', borderRadius: '30px' }}>
              <p><b>Where are you located?</b></p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, exercitationem?</p>
            </div>
            <div className="card rounded-4 p-2 mt-4" style={{ backgroundColor: '#f5f5f5', borderRadius: '30px' }}>
              <p><b>Where are you located?</b></p>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, suscipit?</p>
            </div>
            <div className="card rounded-4 p-2 mt-4" style={{ backgroundColor: '#f5f5f5', borderRadius: '30px' }}>
              <p><b>Where are you located?</b></p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, tempora!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

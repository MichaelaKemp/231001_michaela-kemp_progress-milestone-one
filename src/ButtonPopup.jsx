import './ButtonPopup.css';

function ButtonPopup() {

  const handleYesClick = () => {
    alert('Yayyy XD');
  };

  const handleNoClick = () => {
    alert('Nooo D:');
  };

  return (
    <div className="container">
      <button onClick={handleYesClick}>Yes</button>
      <button onClick={handleNoClick}>No</button>
    </div>
  );
}

export default ButtonPopup;

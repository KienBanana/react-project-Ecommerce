
import PropTypes from 'prop-types';
const ItemImageAbout = (props) => {
  return (
    <div>
      <div className="relative mb-[90px] ">
        <img
          className="object-cover h-[400px] w-full"
          src={props.image}
          alt=""
        />
        <h1 className="text-[48px] uppercase text-[#fff] absolute top-[50%] left-[60%] w-[35%] text-center font-bold">
          {props.title}
        </h1>
      </div>
    </div>
  );
};
ItemImageAbout.propTypes = {
    image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  };

export default ItemImageAbout;

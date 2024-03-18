import PropTypes from "prop-types";

const HomeLayout = ({ children }) => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between h-[100dvh]">
      {children}
    </div>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node,
};

export default HomeLayout;

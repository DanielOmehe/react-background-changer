import "../stylesheets/color-picker.css";

const ColorPicker = ({ children }) => {
  return (
      <div className="color-picker">
        {children}
      </div>
  );
};

export default ColorPicker;

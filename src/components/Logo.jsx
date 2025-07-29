import logo from '../assets/images/logo-transparent.png';

const Logo = ({ expanded = true }) => {
  return (
    <div className={`flex items-center ${expanded ? 'space-x-4' : 'justify-center'}`}>
      {/* Logo Image */}
      <div className={`${expanded ? 'h-12 w-12' : 'h-16 w-16'} flex items-center justify-center`}>
        <img
          src={logo}
          alt="MedCure Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Logo Text - Only visible when expanded */}
      {expanded && (
        <div className="font-extrabold text-2xl text-gray-800">
          <span className="logo-text">MedCure</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
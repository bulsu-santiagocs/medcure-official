import logo from '../assets/images/logo-transparent.png';

const Logo = ({ expanded = true }) => {
  return (
    <div className={`flex items-center ${expanded ? 'space-x-3' : 'justify-center'}`}>
      {/* Logo Image */}
      <div className={`${expanded ? 'h-10 w-10' : 'h-8 w-8'} flex items-center justify-center`}>
        <img
          src={logo}
          alt="MedCure Logo"
          className="h-full w-full object-contain"
        />
      </div>

      {/* Logo Text - Only visible when expanded */}
      {expanded && (
        <div className="font-bold text-xl text-amber-50">
          <span className="text-amber-200">MedCure</span>
        </div>
      )}
    </div>
  );
};

export default Logo;
import { useState, useRef, useEffect } from "react";
import logo from "../assets/intro-section-with-dropdown-navigation-main/images/logo.svg";
import arrowDownIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-down.svg";
import arrowUpIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-arrow-up.svg";
import menuIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-menu.svg";
import closeIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-close-menu.svg";
import todoIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-todo.svg";
import calendarIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-calendar.svg";
import reminderIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-reminders.svg";
import planingIcon from "../assets/intro-section-with-dropdown-navigation-main/images/icon-planning.svg";
interface NavItem<S extends string> {
  name: S;
  link: string;
  hasDropdown?: boolean;
}

interface FeatureDropdownItems {
  itemName: string;
  icon: any;
}

interface CompanyDropdownItems {
  itemName: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // function to close dropdown if the focus on it is left
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setActiveDropdown(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setActiveDropdown]);
  
  
    const toggleDropdown = (name: string) => {
      setActiveDropdown(activeDropdown === name ? null : name);
    };


  const navItems: NavItem<string>[] = [
    { name: "Features", link: "#", hasDropdown: true },
    { name: "Company", link: "#", hasDropdown: true },
    { name: "Careers", link: "#" },
    { name: "About", link: "#" },
  ];

  const featureDropdownItems: FeatureDropdownItems[] = [
    { itemName: "Todo List", icon: todoIcon },
    { itemName: "Calender", icon: calendarIcon },
    { itemName: "Reminder", icon: reminderIcon },
    { itemName: "Planing", icon: planingIcon },
  ];

  const companyDropdownItems: CompanyDropdownItems[] = [
    { itemName: "History" },
    { itemName: "Our Team" },
    { itemName: "Blog" },
  ];

  return (
    <header className="w-full" ref={dropdownRef}>
      <nav className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center px-4 md:px-6 h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="logo" className="w-20 h-10" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <img src={isMenuOpen ? closeIcon : menuIcon} alt="menu" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-between flex-grow">
            <ul className="flex items-center space-x-6 ml-12">
              {navItems.map((item) => (
                <li key={item.name} className="relative">
                  <button
                    className="flex items-center text-gray-600 hover:text-black"
                    onClick={() =>
                      item.hasDropdown && toggleDropdown(item.name)
                    }
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <img
                        src={
                          activeDropdown === item.name
                            ? arrowUpIcon
                            : arrowDownIcon
                        }
                        alt="arrow"
                        className="ml-2"
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  {item.hasDropdown && activeDropdown === item.name && (
                    <div className="absolute top-full left-0 bg-white py-4 px-6 shadow-lg rounded-lg w-36">
                      <ul className="space-y-4 text-left">
                        {item.name === "Features" &&
                          featureDropdownItems.map((feature) => (
                            <li
                              key={feature.itemName}
                              className="flex items-center space-x-4 text-xs"
                            >
                              <img src={feature.icon} alt="icon" />
                              <button className="w-full">
                                {feature.itemName}
                              </button>
                            </li>
                          ))}

                        {item.name === "Company" &&
                          companyDropdownItems.map((company) => (
                            <li className="text-xs" key={company.itemName}>
                              <button className="w-full">
                                {company.itemName}
                              </button>
                            </li>
                          ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <button className="text-gray-600 hover:text-black">Login</button>
              <button className="border border-gray-600 rounded-lg px-4 py-2 hover:border-black hover:text-black text-gray-600">
                Register
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
              <div className="bg-white h-full w-2/3 ml-auto p-6">
                <div className="flex justify-end mb-6">
                  <button onClick={() => setIsMenuOpen(false)}>
                    <img src={closeIcon} alt="close" />
                  </button>
                </div>
                <ul className="space-y-4">
                  {navItems.map((item) => (
                    <li key={item.name} className="relative">
                      <button
                        className="flex items-center text-gray-600 hover:text-black"
                        onClick={() =>
                          item.hasDropdown && toggleDropdown(item.name)
                        }
                      >
                        {item.name}
                        {item.hasDropdown && (
                          <img
                            src={
                              activeDropdown === item.name
                                ? arrowUpIcon
                                : arrowDownIcon
                            }
                            alt="arrow"
                            className="ml-2"
                          />
                        )}
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 space-y-4">
                  <button className="w-full text-center text-gray-600">
                    Login
                  </button>
                  <button className="w-full border border-gray-600 rounded-lg py-2 text-gray-600">
                    Register
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Navbar;

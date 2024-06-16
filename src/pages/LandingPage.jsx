import React, { useEffect, useState } from "react";
import { RiUserLine } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { MdHelpOutline } from "react-icons/md";
import { CgShoppingCart } from "react-icons/cg";
import NewNavLinks from "../Components/NewNavLinks";
import DropdownContent from "../Components/Dropdown";
import Modal from "../Components/Modals";
import LoginForm from "../Components/forms/LoginForm";
import SignUpForm from "../Components/forms/SignupForm";
import ResetPasswordForm from "../Components/forms/ResetPasswordForm";
import NewPasswordForm from "../Components/forms/NewPasswordForm";
import HelpCenter from "../Components/HelpCenter";
import { MenShoes, hero1, logo } from "../assets";
import {
  supermarketContent,
  appliancesContent,
  electronicsContent,
  healthContent,
} from "../Components/Contents";
import { Link } from "react-router-dom";
import ProductCard from "../Components/Cards/ProductCard";
import GreenHeader from "../Components/Cards/GreenHeader";
import Footer from "../Components/Footer";
import QuickViewModal from "../Components/modals/QuickViewModal";
import SignupVerifyEmail from "../Components/forms/SignupVerifyEmail";
import VerifyEmailForm from "../Components/forms/VerifyEmailForm";
import ResetConfirmation from "../Components/forms/ResetConfirmation";
import CartModal from "../Components/modals/CartModal";
import {
  products,
  newProducts,
  electronicsProducts,
  healthProducts,
  supermarketProducts,
} from "../assets/data/data";

const LandingPage = () => {
  const [user, setUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isResetSuccessModalOpen, setIsResetSuccessModalOpen] = useState(false);
  const [isCreateNewPasswordModalOpen, setIsCreateNewPasswordModalOpen] =
    useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [isVerifySuccessModalOpen, setIsVerifySuccessModalOpen] =
    useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quickViewItem, setQuickViewItem] = useState(null);
  const [isQuickViewModalOpen, setIsQuickViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error("Error parsing user data from localStorage:", error);
        localStorage.removeItem("user");
      }
    }
  }, []);

  const getUserInitials = (email) => {
    if (!email) return "";
    const initials = email.split("@")[0].match(/\b\w/g) || [];
    return ((initials.shift() || "") + (initials.pop() || "")).toUpperCase();
  };
  const handleMouseEnter = (content) => {
    setDropdownContent(content);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const openSignUpModal = () => {
    setIsSignUpModalOpen(true);
  };

  const closeSignUpModal = () => {
    setIsSignUpModalOpen(false);
  };

  const openResetPasswordModal = () => {
    setIsResetPasswordModalOpen(true);
  };

  const closeResetPasswordModal = () => {
    setIsResetPasswordModalOpen(false);
  };

  const closeCreateNewPasswordModal = () => {
    setIsCreateNewPasswordModalOpen(false);
  };

  const openCreateNewPasswordModal = () => {
    setIsCreateNewPasswordModalOpen(true);
  };
  const closeResetPasswordSuccessModal = () => {
    setIsResetSuccessModalOpen(false);
  };

  const openResetPasswordSuccessModal = () => {
    setIsResetSuccessModalOpen(true);
  };

  const openVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(true);
  };

  const closeVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(false);
  };

  const openVerifySuccessModal = () => {
    setIsVerifySuccessModalOpen(true);
  };

  const closeVerifySuccessModal = () => {
    setIsVerifySuccessModalOpen(false);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  const openQuickViewModal = (product) => {
    setSelectedProduct(product);
    setIsQuickViewModalOpen(true);
  };

  const closeQuickViewModal = () => {
    setIsQuickViewModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSignupSuccess = () => {
    setIsSignUpModalOpen(false);
    setIsVerifyEmailModalOpen(true);
  };

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(
      (item) => item.title === product.title
    );

    if (existingProduct) {
      const updatedCart = cartItems.map((item) =>
        item.title === product.title
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (productToRemove) => {
    const updatedCart = cartItems.filter((item) => item !== productToRemove);
    setCartItems(updatedCart);
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white text-black pt-10 px-[5%] flex flex-col">
        <nav className="flex lgss:flex-row flex-col w-full items-center justify-between gap-8 h-[60px] mb-6">
          <div className="w-full lgss:w-[50%] flex justify-between gap-7">
            <Link to={"/"}>
              <img src={logo} alt="" />
            </Link>
            <input
              type="text"
              className="py- px-2 w-[60%] outline-none border border-black"
              placeholder="Search products..."
            />
          </div>
          <div className="lgss:w-[30%] w-full flex gap-10 justify-center items-center">
            {user ? (
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 text-white font-bold">
                {getUserInitials(user.email)}
              </div>
            ) : (
              <NewNavLinks
                link={"Account"}
                icon1={RiUserLine}
                icon2={LiaAngleDownSolid}
                onClick={openLoginModal}
              />
            )}
            <NewNavLinks
              link={"Help"}
              icon1={MdHelpOutline}
              icon2={LiaAngleDownSolid}
              onClick={openHelpModal}
            />
            <NewNavLinks
              link={"Cart"}
              icon1={CgShoppingCart}
              icon2={LiaAngleDownSolid}
              onClick={() => setCartModalOpen(true)}
            />
          </div>
        </nav>
        {/* ================ products nav menu =============== */}
        <div
          className="mb-5 hidden lgss:flex relative"
          onMouseLeave={handleMouseLeave}
        >
          <ul className="flex w-full justify-between items-center uppercase font-semibold list-none pt-10 px-[10%] cursor-pointer">
            <li onMouseEnter={() => handleMouseEnter(supermarketContent)}>
              supermarket
            </li>
            <li onMouseEnter={() => handleMouseEnter(appliancesContent)}>
              appliances
            </li>
            <li onMouseEnter={() => handleMouseEnter(healthContent)}>
              health & beauty
            </li>
            <li onMouseEnter={() => handleMouseEnter(healthContent)}>
              fashion
            </li>
            <li onMouseEnter={() => handleMouseEnter(electronicsContent)}>
              electronics
            </li>
          </ul>
          {showDropdown && <DropdownContent content={dropdownContent} />}
        </div>
        {/* ================ Hero Section =============== */}
        <div className="relative w-full mt-12">
          <img src={hero1} className="w-full" alt="hero-background" />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-start px-[5%] justify-center text-white">
            <h2 className="lgss:text-[3rem] text-yellow font-bold mb-4">
              Swift<span className="text-white">Cart</span>
            </h2>
            <h1 className="lgss:text-[6rem] w-[30%] font-semibold mb-6 lgss:leading-[8rem]">
              Shopping Festival
            </h1>
            <button className="bg-yellow text-raleway text-white py-3 px-6 lgss:text-[1.5rem] rounded">
              Up to 50% off
            </button>
          </div>
        </div>
        {/* ================ Trendy Section =============== */}
        <div className="w-full my-10 flex flex-col justify-center items-center bg-[#F9F9F9]">
          {/* ==========hanpicked ============== */}
          <div className="bg-green text-secondary w-full rounded-t-[16px] h-16 flex justify-between items-center px-5">
            <h2 className="font-semibold lgss:text-[1.3rem]">
              Handpicked for you
            </h2>

            <div className="flex justify-center items-center gap-2">
              <span className="font-medium">Sort by:</span>
              <p>Category</p>
              <LiaAngleDownSolid />
            </div>
          </div>
          <div className="my-6 py-2">
            <h1 className="font-bold font-dm text-3xl">Trending Now</h1>
          </div>

          <div className="grid lgss:grid-cols-4 gap-7 w-full py-4">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                productClass={product.productClass}
                newP={product.newP}
                oldP={product.oldP}
                stock={product.stock}
                onAddToCartClick={() => openQuickViewModal(product)}
                onAddToCart={() => handleAddToCart(product)}
                onQuickView={() => setQuickViewItem(product)}
              />
            ))}
          </div>

          <button className="bg-white text-yellow px-8 py-4 text-2xl font-semibold border-2 my-8 shadow-lg border-yellow">
            View All
          </button>
          <div className="relative w-full mt-6 mb-10">
            <img
              src={MenShoes}
              className="w-full lgss:h-auto h-[200px]"
              alt="hero-background"
            />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-between py-10 text-white">
              <div className="text-center">
                <p>Clothing, shoes & Jewelry</p>
                <h2 className="lgss:text-[2rem] text-yellow font-semibold mb-4 uppercase">
                  men&apos;s shoes
                </h2>
              </div>
              <button className="bg-yellow text-raleway py-3 px-10 font-semibold lgss:text-[2rem] rounded text-black">
                View
              </button>
            </div>
          </div>

          {/* ================== New Arrivals ====================== */}
          <div className="mt-6 py-2">
            <h1 className="font-bold font-dm text-3xl">New Arrival</h1>
          </div>
        </div>
        <div className="grid gap-8 py-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {newProducts.map((product, index) => (
            <ProductCard
              key={index}
              imageSrc={product.imageSrc}
              title={product.title}
              productClass={product.productClass}
              newP={product.newP}
              oldP={product.oldP}
              stock={product.stock}
              onAddToCartClick={() => openQuickViewModal(product)}
              onAddToCart={() => handleAddToCart(product)}
              onQuickView={() => setQuickViewItem(product)}
            />
          ))}
        </div>
        {selectedProduct && (
          <QuickViewModal
            isOpen={isQuickViewModalOpen}
            onClose={closeQuickViewModal}
            product={selectedProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        <div className="my-4">
          {/* // =========health ===== */}
          <GreenHeader h2={"Health & Beauty"} />
          <div className="grid lgss:grid-cols-4 gap-7 w-full mb-14">
            {healthProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                productClass={product.productClass}
                stock={product.stock}
                newP={product.newP}
                oldP={product.oldP}
                onAddToCartClick={() => openQuickViewModal(product)}
              />
            ))}
          </div>

          {/* // ========= supermarket ===== */}
          <GreenHeader h2={"Supermarket"} />
          <div className="grid lgss:grid-cols-4 gap-7 w-full mb-14">
            {supermarketProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                productClass={product.productClass}
                stock={product.stock}
                newP={product.newP}
                oldP={product.oldP}
                onAddToCartClick={() => openQuickViewModal(product)}
              />
            ))}
          </div>

          {/* // ========= electronics ===== */}
          <GreenHeader h2={"Electronics"} />
          <div className="grid lgss:grid-cols-4 gap-7 w-full mb-14">
            {electronicsProducts.map((product, index) => (
              <ProductCard
                key={index}
                imageSrc={product.imageSrc}
                title={product.title}
                productClass={product.productClass}
                newP={product.newP}
                oldP={product.oldP}
                stock={product.stock}
                onAddToCartClick={() => openQuickViewModal(product)}
              />
            ))}
          </div>
        </div>

        {/* ========= modals ==========*/}

        <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
          <LoginForm
            onSignupClick={openSignUpModal}
            onForgotPasswordClick={openResetPasswordModal}
            onClose={closeLoginModal}
          />
        </Modal>
        <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
          <SignUpForm
            onLoginClick={openLoginModal}
            onSuccessfulSignup={openVerifyEmailModal}
            onClose={closeSignUpModal}
          />
        </Modal>
        <Modal
          isOpen={isResetPasswordModalOpen}
          onClose={closeResetPasswordModal}
        >
          <ResetPasswordForm
            onCreateNewPasswordClick={openCreateNewPasswordModal}
            onClose={closeResetPasswordModal}
          />
        </Modal>
        <Modal
          isOpen={isCreateNewPasswordModalOpen}
          onClose={closeCreateNewPasswordModal}
        >
          <NewPasswordForm
            onNewPwCreated={openResetPasswordSuccessModal}
            onClose={closeCreateNewPasswordModal}
          />
        </Modal>
        <Modal
          isOpen={isResetSuccessModalOpen}
          onClose={closeResetPasswordSuccessModal}
        >
          <ResetConfirmation
            onPwResetSuccess={openLoginModal}
            onClose={closeResetPasswordSuccessModal}
          />
        </Modal>
        <Modal isOpen={isVerifyEmailModalOpen} onClose={closeVerifyEmailModal}>
          <VerifyEmailForm
            onSuccessfulVerification={openVerifySuccessModal}
            onClose={closeVerifyEmailModal}
          />
        </Modal>
        <Modal
          isOpen={isVerifySuccessModalOpen}
          onClose={closeVerifySuccessModal}
        >
          <SignupVerifyEmail
            onClose={closeVerifySuccessModal}
            onOTPChecked={openLoginModal}
          />
        </Modal>
        <Modal isOpen={isHelpModalOpen} onClose={closeHelpModal}>
          <HelpCenter />
        </Modal>
        {/* Cart Modal */}
        <CartModal
          isOpen={isCartModalOpen}
          onClose={() => setCartModalOpen(false)}
          cartItems={cartItems}
          onRemoveFromCart={handleRemoveFromCart}
        />
        <QuickViewModal
          isOpen={isQuickViewModalOpen}
          onClose={closeQuickViewModal}
          product={selectedProduct}
          onAddToCart={handleAddToCart}
        />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;

import React, { useState } from "react";
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
import {
  MenShoes,
  hero1,
  logo,
  newproduct1,
  newproduct10,
  newproduct11,
  newproduct12,
  newproduct13,
  newproduct14,
  newproduct15,
  newproduct16,
  newproduct2,
  newproduct3,
  newproduct4,
  newproduct5,
  newproduct6,
  newproduct7,
  newproduct8,
  newproduct9,
  product1,
  product2,
  product3,
  product4,
} from "../assets";
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

const products = [
  {
    imageSrc: product1,
    title: "Modern Ceiling Light Modern",
    productClass: "Ceiling Fan",
    newP: "N27,749",
    oldP: "N40,196",
    stock: 10,
  },
  {
    imageSrc: product2,
    title: "Adidas Nike Sneakers",
    productClass: "Shoes",
    newP: "N5,900",
    oldP: "N9,999",
    stock: 5, // add stock count
  },
  {
    imageSrc: product3,
    title: "Digital Wall Clock",
    productClass: "Accessories",
    newP: "N3,200",
    oldP: "N5,300",
    stock: 8, // add stock count
  },
  {
    imageSrc: product4,
    title: "Digital WristWatch",
    productClass: "Accessories",
    newP: "N10,999",
    oldP: "N18,822",
    stock: 12, // add stock count
  },
];

const newProducts = [
  {
    imageSrc: newproduct1,
    title: "Casual Shoulder Sports Sling ",
    productClass: "Sport bag",
    newP: "N2,699",
    oldP: "N40,196",
    stock: 17,
  },
  {
    imageSrc: newproduct2,
    title: "Titanium Steel Cuban Hip Hop",
    productClass: "Necklace",
    newP: "N1,780",
    oldP: "N9,999",
    stock: 10,
  },
  {
    imageSrc: newproduct3,
    title: "Cidea Android 12 Adults 8 Inch ",
    productClass: "Tablet 6GB Ram 256GB Rom...",
    newP: "N68,160",
    oldP: "N5,300",
    stock: 20,
  },
  {
    imageSrc: newproduct4,
    title: "Shoe Rack Foldable Assembly",
    productClass: "Stainless Steel Silver 6 Layers",
    newP: "N11,099",
    oldP: "N18,822",
    stock: 1,
  },
  {
    imageSrc: newproduct5,
    title: "Mens Beach Shoes Outdoor ",
    productClass: "EVA hole Sandals Black",
    newP: "N12,500",
    oldP: "N18,822",
    stock: 20,
  },
  {
    imageSrc: newproduct6,
    title: "Pure Black Long-Lasting ",
    productClass: "Perfume",
    newP: "N4,200",
    oldP: "N5,000",
    stock: 20,
  },
  {
    imageSrc: newproduct7,
    title: "4 in 1 Fashion Backpacks with ",
    productClass: "Extra Purse",
    newP: "N11,099",
    oldP: "N18,822",
    stock: 10,
  },
  {
    imageSrc: newproduct8,
    title: "Qasa Solar Strong Power ",
    productClass: "Portable SPP-220 Easily...",
    newP: "N205,099",
    oldP: "N300,000",
    stock: 5,
  },
];

const electronicsProducts = [
  {
    imageSrc: newproduct5,
    title: "Mens Beach Shoes Outdoor ",
    productClass: "EVA hole Sandals Black",
    newP: "N12,500",
    oldP: "N18,822",
    stock: 13,
  },
  {
    imageSrc: newproduct6,
    title: "Pure Black Long-Lasting ",
    productClass: "Perfume",
    newP: "N4,200",
    oldP: "N5,000",
    stock: 40,
  },
  {
    imageSrc: newproduct7,
    title: "4 in 1 Fashion Backpacks with ",
    productClass: "Extra Purse",
    newP: "N11,099",
    oldP: "N18,822",
    stock: 14,
  },
  {
    imageSrc: newproduct8,
    title: "Qasa Solar Strong Power ",
    productClass: "Portable SPP-220 Easily...",
    newP: "N205,099",
    oldP: "N300,000",
    stock: 30,
  },
];

const healthProducts = [
  {
    imageSrc: newproduct9,
    title: "Bob'S Red Mill Whole Wheat",
    productClass: "Pearl Couscous, 16 Oz 454g",
    newP: "N7,100",
    oldP: "N8,000",
    stock: 13,
  },
  {
    imageSrc: newproduct10,
    title: "Milo Hot Chocolate Refill -",
    productClass: "800g",
    newP: "N4,200",
    oldP: "N5,000",
    stock: 23,
  },
  {
    imageSrc: newproduct11,
    title: "Flat Tummy Tea With Moringa,",
    productClass: "Slim Tea For Weightloss",
    newP: "N11,099",
    oldP: "N18,822",
    stock: 3,
  },
  {
    imageSrc: newproduct12,
    title: "Nittol Nittol Antibacterial",
    productClass: "Detergent 160g",
    newP: "N6,675",
    oldP: "N7,500",
    stock: 200,
  },
];

const supermarketProducts = [
  {
    imageSrc: newproduct13,
    title: "Long Rich Brightening Hand",
    productClass: "Cream",
    newP: "N7,100",
    stock: 100,
  },
  {
    imageSrc: newproduct14,
    title: "NIVEA Perfect and Even Tone",
    productClass: "Day/Night Cream for Women",
    newP: "N4,200",
    oldP: "N5,000",
    stock: 130,
  },
  {
    imageSrc: newproduct15,
    title: "4 in 1 Fashion Backpacks with ",
    productClass: "Extra Purse",
    newP: "N11,099",
    oldP: "N18,822",
    stock: 200,
  },
  {
    imageSrc: newproduct16,
    title: "NIVEA Lip Care Shine bundle - ",
    productClass: "Blackberry, Strawberry,.",
    newP: "N6,675",
    oldP: "N7,500",
    stock: 210,
  },
];

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isResetSuccessModalOpen, setIsResetSuccessModalOpen] =
    useState(false);
  const [isCreateNewPasswordModalOpen, setIsCreateNewPasswordModalOpen] =
    useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [isVerifySuccessModalOpen, setIsVerifySuccessModalOpen] =
    useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);
  const [isQuickViewModalOpen, setIsQuickViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

  const handleAddToCart = (product, quantity) => {
    console.log(`Adding ${quantity} of ${product.title} to cart`);
    if (!isUserSignedIn) {
      openLoginModal();
    } else {
    }
  };

  return (
    <div className="w-full">
      <div className="w-full bg-white text-black pt-10 px-[5%] flex flex-col">
        <nav className="flex w-full items-center justify-between gap-8 h-[60px]">
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
          <div className="lgss:w-[30%] hidden lgss:flex gap-10 justify-center items-center">
            <NewNavLinks
              link={"Account"}
              icon1={RiUserLine}
              icon2={LiaAngleDownSolid}
              onClick={openLoginModal}
            />
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
        <div className="relative w-full mt-6">
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
          onCreateNewPasswordClick={openCreateNewPasswordModal} onClose={closeResetPasswordModal}/>
        </Modal>
        <Modal
          isOpen={isCreateNewPasswordModalOpen}
          onClose={closeCreateNewPasswordModal}
        >
          <NewPasswordForm onNewPwCreated={openResetPasswordSuccessModal}
          onClose={closeCreateNewPasswordModal}/>
        </Modal>
        <Modal
          isOpen={isResetSuccessModalOpen}
          onClose={closeResetPasswordSuccessModal}
        >
          <ResetConfirmation onPwResetSuccess={openLoginModal}
          onClose={closeResetPasswordSuccessModal}/>
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

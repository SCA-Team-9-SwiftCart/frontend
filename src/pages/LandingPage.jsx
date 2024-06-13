import React, { useState } from "react";
import { hero1, logo } from "../assets";
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
import CreateNewPasswordForm from "../Components/forms/NewPasswordForm";
import VerifyEmail from "../Components/forms/VerifyEmailForm";
import HelpCenter from "../Components/HelpCenter";
import {
  supermarketContent,
  appliancesContent,
  electronicsContent,
  healthContent,
} from "../Components/Contents";

const LandingPage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownContent, setDropdownContent] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);
  const [isResetPasswordModalOpen, setIsResetPasswordModalOpen] =
    useState(false);
  const [isCreateNewPasswordModalOpen, setIsCreateNewPasswordModalOpen] =
    useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [isHelpModalOpen, setIsHelpModalOpen] = useState(false);

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

  const openCreateNewPasswordModal = () => {
    setIsCreateNewPasswordModalOpen(true);
  };

  const closeCreateNewPasswordModal = () => {
    setIsCreateNewPasswordModalOpen(false);
  };

  const openVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(true);
  };

  const closeVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(false);
  };

  const openHelpModal = () => {
    setIsHelpModalOpen(true);
  };

  const closeHelpModal = () => {
    setIsHelpModalOpen(false);
  };

  return (
    <div className="h-[100vh] w-full bg-white text-black pt-10 px-[5%] flex flex-col">
      <nav className="flex w-full items-center justify-between gap-8 h-[60px]">
        <div className="w-full lgss:w-[50%] flex justify-between gap-7">
          <img src={logo} alt="" className="w-[40%] lgss:w-[30%] lgss:h-11" />
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
          <NewNavLinks link={"Cart"} icon1={CgShoppingCart} />
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
          <li onMouseEnter={() => handleMouseEnter(healthContent)}>fashion</li>
          <li onMouseEnter={() => handleMouseEnter(electronicsContent)}>
            electronics
          </li>
        </ul>
        {showDropdown && <DropdownContent content={dropdownContent} />}
      </div>

      {/* ================ Hero Section =============== */}
      <div className="relative w-full">
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
      <div className="w-full my-10">
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
      </div>

      {/* Modals */}
      <Modal isOpen={isLoginModalOpen} onClose={closeLoginModal}>
        <LoginForm
          onSignUpClick={() => {
            closeLoginModal();
            openSignUpModal();
          }}
          onForgotPasswordClick={() => {
            closeLoginModal();
            openResetPasswordModal();
          }}
        />
      </Modal>

      <Modal isOpen={isSignUpModalOpen} onClose={closeSignUpModal}>
        <SignUpForm
          onLoginClick={() => {
            closeSignUpModal();
            openLoginModal();
          }}
          onSignUpSuccess={() => {
            closeSignUpModal();
            openVerifyEmailModal();
          }}
        />
      </Modal>

      <Modal
        isOpen={isResetPasswordModalOpen}
        onClose={closeResetPasswordModal}
      >
        <ResetPasswordForm
          onCreateNewPasswordClick={() => {
            closeResetPasswordModal();
            openCreateNewPasswordModal();
          }}
        />
      </Modal>

      <Modal
        isOpen={isCreateNewPasswordModalOpen}
        onClose={closeCreateNewPasswordModal}
      >
        <CreateNewPasswordForm />
      </Modal>

      <Modal isOpen={isVerifyEmailModalOpen} onClose={closeVerifyEmailModal}>
        <VerifyEmail />
      </Modal>

      <Modal isOpen={isHelpModalOpen} onClose={closeHelpModal}>
        <HelpCenter />
      </Modal>
    </div>
  );
};

export default LandingPage;

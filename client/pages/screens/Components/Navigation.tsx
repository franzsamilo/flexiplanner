import { useRouter } from "next/router";

function useNavigation() {
  const router = useRouter();
  function navigateTo(path: string) {
    router.push(path);
  }

  function ToHome() {
    navigateTo("/screens/Home/Home");
  }

  function ToAboutUs() {
    navigateTo("/screens/AboutUs/aboutUs");
  }

  function ToDemo() {
    navigateTo("/screens/Demo/demo");
  }

  function ToLogin() {
    navigateTo("/screens/Login/login");
  }

  function ToSignUp() {
    navigateTo("/screens/SignUp/SignUp");
  }

  return {
    ToHome,
    ToAboutUs,
    ToDemo,
    ToLogin,
    ToSignUp,
  };
}

export default useNavigation;

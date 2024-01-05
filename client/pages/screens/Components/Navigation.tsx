import { useRouter } from 'next/router'

function useNavigation () {
  const router = useRouter()
  function navigateTo (path: string) {
    router.push(path)
  }

  function ToHome () {
    navigateTo('/screens/Home/Home')
  }

  function ToMain () {
    navigateTo('/screens/Main/Main')
  }

  function ToAboutUs () {
    navigateTo('/screens/AboutUs/aboutUs')
  }

  function ToDemo () {
    navigateTo('/screens/Demo/demo')
  }

  function ToLogin () {
    navigateTo('/screens/Login/login')
  }

  function ToSignUp () {
    navigateTo('/screens/SignUp/SignUp')
  }
  function ToScheduler () {
    navigateTo('/screens/Scheduler/Scheduler')
  }

  return {
    ToHome,
    ToMain,
    ToAboutUs,
    ToDemo,
    ToLogin,
    ToSignUp,
    ToScheduler
  }
}

export default useNavigation
